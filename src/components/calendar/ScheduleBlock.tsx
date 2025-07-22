import dayjs from "dayjs";
import Image from "next/image";
import { IoEllipsisVertical } from "react-icons/io5";

interface ScheduleBlockProps {
  name: string;
  from: string;
  to: string;
  avatars?: string[];
  date: string;
}

export default function ScheduleBlock({
  name,
  from,
  to,
  avatars,
  date
}: ScheduleBlockProps) {
  const now = dayjs();
  const end = dayjs(`${date}T${to}`);
  const isPast = now.isAfter(end);

  const bgColor = isPast ? "#F0F9FF" : "#FFD7DE";
  const stripeColor = isPast ? "#E3F3FF" : "#FFEBEF";

  return (
    <div
      className="flex flex-col w-full rounded-[18px] gap-1 p-3 justify-between leading-tight"
      style={{
        backgroundColor: bgColor,
        backgroundImage: `repeating-linear-gradient(
          -60deg,
          ${stripeColor},
          ${stripeColor} 5px,
          transparent 5px,
          transparent 10px
        )`,
      }}
    >
      <div className="flex flex-row w-full items-center gap-2">
        <div className="flex items-center space-x-1">
          {avatars?.map((src, i) => (
            <div key={i} className="w-6 h-6 rounded-full overflow-hidden -ml-1">
              <Image src={src} alt="clientes" width={24} height={24} />
            </div>
          ))}
        </div>

        <div className="flex justify-between w-full">
          <div className="flex font-medium font-poppins text-sm text-customNeutral-300">
            {name} - Paciente
          </div>

          <div onClick={() => console.log("clicou")} className="flex cursor-pointer">
            <IoEllipsisVertical color="#233267" />
          </div>
        </div>
      </div>
      <div className="pl-6 font-normal font-poppins text-xs text-customNeutral-200 mb-2">
        {from} - {to}
      </div>

    </div>
  );
}
