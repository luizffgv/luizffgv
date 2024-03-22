export default function Autism() {
  return (
    <div className="flex max-w-prose flex-col gap-4 text-center">
      <p className="text-2xl">
        Pra deixar claro, eu tenho {/* Rainbow gradient */}
        <strong className="color-in inline-block">
          <span className="animate-[pulse_1s_infinite] text-red-500 drop-shadow-[0_0_10px_currentcolor]">
            a
          </span>
          <span className="animate-[pulse_1s_100ms_infinite] text-orange-500 drop-shadow-[0_0_10px_currentcolor]">
            u
          </span>
          <span className="animate-[pulse_1s_200ms_infinite] text-yellow-500 drop-shadow-[0_0_10px_currentcolor]">
            t
          </span>
          <span className="animate-[pulse_1s_300ms_infinite] text-green-500 drop-shadow-[0_0_10px_currentcolor]">
            i
          </span>
          <span className="animate-[pulse_1s_400ms_infinite] text-blue-500 drop-shadow-[0_0_10px_currentcolor]">
            s
          </span>
          <span className="animate-[pulse_1s_500ms_infinite] text-indigo-500 drop-shadow-[0_0_10px_currentcolor]">
            m
          </span>
          <span className="animate-[pulse_1s_600ms_infinite] text-purple-500 drop-shadow-[0_0_10px_currentcolor]">
            o
          </span>
        </strong>
      </p>
      <p>Você não tem preconceito, não é?</p>
    </div>
  );
}
