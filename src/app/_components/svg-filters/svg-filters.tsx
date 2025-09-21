export default function SvgFilters(): JSX.Element {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" className="hidden">
        <defs>
          <filter
            id="filter-neon"
            x="-100%"
            y="-100%"
            width="300%"
            height="300%"
          >
            <feGaussianBlur
              in="SourceAlpha"
              stdDeviation="5"
              result="inner-blur"
            />

            <feColorMatrix
              in="inner-blur"
              result="inner-blur"
              type="matrix"
              values="-1  0  0 0   1 
                       0 -1  0 0   1 
                       0  0 -1 0   1
                       0  0  0 0.5 0"
            />

            <feComposite
              in="inner-blur"
              in2="SourceAlpha"
              operator="in"
              result="inner-blur"
            />

            <feMerge>
              <feMergeNode in="SourceGraphic" />
              <feMergeNode in="inner-blur" />
            </feMerge>
          </filter>
        </defs>
      </svg>
    </>
  );
}
