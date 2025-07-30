import dayjs, { Dayjs } from "dayjs";
import { useState, useRef, useEffect, useCallback, useMemo } from "react";

const DAY_WIDTH = 48.68 + 10;

export default function useCalendar() {
  const [currentMonthLabel, setCurrentMonthLabel] = useState(dayjs().format("MMMM"));
  const [currentYearLabel, setCurrentYearLabel] = useState(dayjs().format("YYYY"));
  const [selectDay, setSelectDay] = useState<string>(dayjs().format("YYYY-MM-DD"));

  const daysContainerRef = useRef<HTMLDivElement>(null);
  const dayWidth = DAY_WIDTH;

  const isDragging = useRef(false);
  const wasDragged = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const isTicking = useRef(false);

  const visibleDays = useMemo((): Dayjs[] => {
    const days: Dayjs[] = [];
    const start = dayjs().subtract(30, "day");
    const end = dayjs().add(60, "day");

    const diff = end.diff(start, "day");
    for (let i = 0; i <= diff; i++) {
      days.push(start.add(i, "day"));
    }

    return days;
  }, []);

  const updateMonthFromScroll = useCallback(() => {
    if (!daysContainerRef.current) return;

    const container = daysContainerRef.current;
    const parentRect = container.getBoundingClientRect();
    const children = Array.from(container.children) as HTMLElement[];

    const visible: { index: number; day: Dayjs }[] = [];

    children.forEach((child, index) => {
      const rect = child.getBoundingClientRect();
      const isVisible = rect.right > parentRect.left && rect.left < parentRect.right;
      if (isVisible) {
        visible.push({ index, day: visibleDays[index] });
      }
    });

    const monthCount: Record<string, { count: number; date: Dayjs }> = {};
    visible.forEach(({ day }) => {
      const monthKey = day.format("YYYY-MM");
      if (!monthCount[monthKey]) {
        monthCount[monthKey] = { count: 1, date: day };
      } else {
        monthCount[monthKey].count += 1;
      }
    });

    const mostCommonMonth = Object.values(monthCount).sort((a, b) => b.count - a.count)[0];
    if (mostCommonMonth) {
      setCurrentMonthLabel(mostCommonMonth.date.format("MMMM"));
      setCurrentYearLabel(mostCommonMonth.date.format("YYYY"));
    }
  }, [visibleDays]);

  useEffect(() => {
    if (daysContainerRef.current) {
      const initialScroll = 0
      daysContainerRef.current.scrollLeft = initialScroll;
    }
  }, [dayWidth]);

  useEffect(() => {
    const container = daysContainerRef.current;
    if (!container) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      container.scrollLeft += e.deltaY;
    };

    container.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", onWheel);
    };
  }, []);

  useEffect(() => {
    const container = daysContainerRef.current;
    if (!container) return;

    let timeout: NodeJS.Timeout;

    const onScroll = () => {
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => {
        updateMonthFromScroll();
      }, 100);
    };

    container.addEventListener("scroll", onScroll);

    return () => {
      container.removeEventListener("scroll", onScroll);
      clearTimeout(timeout);
    };
  }, [updateMonthFromScroll])

  useEffect(() => {
    if (!daysContainerRef.current) return;

    const today = dayjs().format("YYYY-MM-DD");
    const todayIndex = visibleDays.findIndex(d => d.format("YYYY-MM-DD") === today);

    if (todayIndex === -1) return;

    const container = daysContainerRef.current;
    const scrollTo = todayIndex * dayWidth - container.clientWidth / 2 + dayWidth / 2;

    container.scrollTo({ left: scrollTo, behavior: "auto" });

    updateMonthFromScroll();
  }, [visibleDays, dayWidth, updateMonthFromScroll])

  const scrollMonth = (offset: number) => {
    if (!daysContainerRef.current) return;
    const container = daysContainerRef.current;

    const distance = offset * 30 * dayWidth;
    container.scrollBy({ left: distance, behavior: "smooth" });

    setTimeout(updateMonthFromScroll, 600);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!daysContainerRef.current) return;

    e.preventDefault();
    isDragging.current = true;
    wasDragged.current = false;

    const rect = daysContainerRef.current.getBoundingClientRect();
    startX.current = e.pageX - rect.left;
    scrollLeft.current = daysContainerRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !daysContainerRef.current) return;

    e.preventDefault();
    wasDragged.current = true;

    const container = daysContainerRef.current;
    const rect = container.getBoundingClientRect();
    const x = e.pageX - rect.left;
    const walk = (x - startX.current) * 1.2;

    if (!isTicking.current) {
      window.requestAnimationFrame(() => {
        container.scrollLeft = scrollLeft.current - walk;
        isTicking.current = false;
      });
      isTicking.current = true;
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    if (wasDragged.current) updateMonthFromScroll();
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!daysContainerRef.current) return;

    isDragging.current = true;
    wasDragged.current = false;

    const rect = daysContainerRef.current.getBoundingClientRect();
    startX.current = e.touches[0].pageX - rect.left;
    scrollLeft.current = daysContainerRef.current.scrollLeft;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current || !daysContainerRef.current) return;

    wasDragged.current = true;

    const container = daysContainerRef.current;
    const rect = container.getBoundingClientRect();
    const x = e.touches[0].pageX - rect.left;
    const walk = (x - startX.current) * 1.2;

    if (!isTicking.current) {
      window.requestAnimationFrame(() => {
        container.scrollLeft = scrollLeft.current - walk;
        isTicking.current = false;
      });
      isTicking.current = true;
    }
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
    if (wasDragged.current) updateMonthFromScroll();
  };
  return {
    currentMonthLabel,
    currentYearLabel,
    selectDay,
    setSelectDay,
    scrollMonth,
    handleMouseDown,
    handleMouseLeave,
    handleMouseMove,
    handleMouseUp,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    updateMonthFromScroll,
    daysContainerRef,
    visibleDays,
    isDragging,
    wasDragged,
    dayWidth
  }

}