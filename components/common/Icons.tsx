import { IconSvgProps } from "@/types/common";
import { FC } from "react";

export const InstagramIcon: FC<IconSvgProps> = ({ size = 24, width, height, ...props }) => (
  <svg
    width={size || width}
    height={size || height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C9.28417 2 8.94417 2.01167 7.8775 2.06C4.24583 2.22667 2.2275 4.24167 2.06083 7.87667C2.01167 8.94417 2 9.28417 2 12C2 14.7158 2.01167 15.0567 2.06 16.1233C2.22667 19.755 4.24167 21.7733 7.87667 21.94C8.94417 21.9883 9.28417 22 12 22C14.7158 22 15.0567 21.9883 16.1233 21.94C19.7517 21.7733 21.775 19.7583 21.9392 16.1233C21.9883 15.0567 22 14.7158 22 12C22 9.28417 21.9883 8.94417 21.94 7.8775C21.7767 4.24917 19.7592 2.2275 16.1242 2.06083C15.0567 2.01167 14.7158 2 12 2ZM12 6.865C9.16417 6.865 6.865 9.16417 6.865 12C6.865 14.8358 9.16417 17.1358 12 17.1358C14.8358 17.1358 17.135 14.8367 17.135 12C17.135 9.16417 14.8358 6.865 12 6.865ZM12 15.3333C10.1592 15.3333 8.66667 13.8417 8.66667 12C8.66667 10.1592 10.1592 8.66667 12 8.66667C13.8408 8.66667 15.3333 10.1592 15.3333 12C15.3333 13.8417 13.8408 15.3333 12 15.3333ZM17.3383 5.4625C16.675 5.4625 16.1375 6 16.1375 6.6625C16.1375 7.325 16.675 7.8625 17.3383 7.8625C18.0008 7.8625 18.5375 7.325 18.5375 6.6625C18.5375 6 18.0008 5.4625 17.3383 5.4625Z"
      fill="currentColor"
    />
  </svg>
);

export const BroomIcon: FC<IconSvgProps> = ({ size, width = 250, height, ...props }) => (
  <svg
    width={size || width}
    height={size || height}
    viewBox="0 0 288 103.66"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g>
      <g>
        <g>
          <g>
            <path
              d="M32.06,20.84c1.34-2.13,1.87-4.55,1.87-6.95c0-3.74-1.34-7.22-4.01-9.89s-6.13-4-9.87-4H0v48.89h22.71
					c4.28,0,8.01-1.61,10.96-4.55c2.94-2.94,4.55-6.68,4.55-10.96s-1.6-8.01-4.55-10.96C33.13,21.92,32.6,21.38,32.06,20.84z
					 M9.89,10.43h9.89c1.07,0,1.87,0.27,2.67,1.07c0.8,0.8,1.07,1.6,1.07,2.67s-0.27,1.87-1.07,2.67c-0.8,0.8-1.6,1.07-2.67,1.07
					H9.89V10.43z M26.18,37.14c-1.07,1.07-2.4,1.6-3.74,1.6H9.89V28.05h12.56c1.6,0,2.67,0.54,3.74,1.6s1.6,2.4,1.6,3.74
					C27.79,34.74,27.26,36.08,26.18,37.14z"
            />
          </g>
          <g>
            <path
              d="M72.41,31c1.87,1.6,7.48,7.22,17.1,16.3c0.27,0.27,0.54,0.54,0.8,0.8c0.27,0.27,0.54,0.54,0.8,0.8h14.96
					c-1.07-0.8-2.4-2.4-4.55-4.28c-1.87-1.87-3.47-3.21-4.55-4.28c-3.47-3.21-5.88-5.61-7.48-7.22c0,0-0.27,0-0.27-0.27
					c0,0,0-0.27,0.27-0.27c3.47-1.07,6.41-2.94,8.55-5.88c2.13-2.94,3.21-6.41,3.21-10.15c0-2.67-0.54-5.34-1.87-7.75
					c-1.07-2.4-2.94-4.55-5.07-6.14S89.77,0.27,86.83,0c-0.27,0-0.54,0-0.8,0c-0.27,0-0.27,0-0.27,0H61.72v48.89h10.15V31H72.41z
					 M72.41,10.43h13.36c1.6,0,2.67,0.54,3.74,1.87c1.07,1.07,1.61,2.67,1.87,4.01c0,2.13-0.54,3.74-1.6,5.07
					c-1.34,1.34-2.67,2.13-4.28,2.13H72.41V10.43z"
            />
          </g>
          <g>
            <polygon
              points="258.88,25.93 229.49,0.28 229.49,48.91 239.64,48.91 239.64,22.99 258.88,39.56 277.85,22.99 277.85,48.91 
					288,48.91 288,0.55 				"
            />
          </g>
          <g>
            <path
              d="M154.42,41.69c2.13-2.13,4.01-4.8,5.07-7.75c1.34-2.94,1.87-6.14,1.87-9.35s-0.54-6.41-1.87-9.62
					c-1.34-2.94-2.94-5.61-5.34-7.75c-2.13-2.13-4.8-4.01-7.75-5.07c-2.94-1.34-6.14-1.87-9.35-1.87c-3.21,0-6.41,0.54-9.62,1.87
					c-2.94,1.34-5.61,2.94-7.75,5.34c-2.13,2.13-4.01,4.8-5.07,7.75c-1.34,2.94-1.87,6.14-1.87,9.35s0.54,6.41,1.87,9.62
					c1.34,2.94,2.94,5.61,5.34,7.75c2.13,2.13,4.8,4.01,7.75,5.07c2.94,1.34,6.14,1.87,9.35,1.87c3.21,0,6.41-0.54,9.62-1.87
					C149.61,45.7,152.29,43.82,154.42,41.69z M127.17,34.47c-2.67-2.67-4.28-6.14-4.28-9.89s1.34-7.22,4.28-9.89
					c2.67-2.67,6.14-4.01,9.89-4.01c1.6,0,2.94,0.27,4.28,0.8c-3.47,0.27-6.41,3.21-6.41,6.68c0,3.74,2.94,6.68,6.68,6.68
					c3.74,0,6.68-2.94,6.68-6.68c0-0.8-0.27-1.34-0.54-2.13c2.13,2.4,3.21,5.34,3.21,8.81c0,4.01-1.34,7.22-4.28,9.89
					c-2.67,2.67-6.14,4.28-9.89,4.28C133.32,38.48,129.85,37.14,127.17,34.47z"
            />
          </g>
          <g>
            <path
              d="M212.67,7.23c-2.13-2.13-4.8-4.01-7.75-5.07c-2.94-1.34-6.14-1.87-9.35-1.87c-3.21,0-6.41,0.54-9.62,1.87
					c-2.94,1.34-5.61,2.94-7.75,5.34c-2.13,2.13-4.01,4.8-5.07,7.75c-1.34,2.94-1.87,6.14-1.87,9.35s0.54,6.41,1.87,9.62
					c1.34,2.94,2.94,5.61,5.34,7.75c2.13,2.13,4.8,4.01,7.75,5.07c2.94,1.34,6.14,1.87,9.35,1.87c3.21,0,6.41-0.54,9.62-1.87
					c2.94-1.34,5.61-2.94,7.75-5.34c2.13-2.13,4.01-4.8,5.07-7.75c1.34-2.94,1.87-6.14,1.87-9.35s-0.54-6.41-1.87-9.62
					C216.66,11.76,214.8,9.36,212.67,7.23z M205.45,34.47c-2.67,2.67-6.14,4.28-9.89,4.28c-4.01,0-7.22-1.34-9.89-4.28
					c-2.67-2.67-4.28-6.14-4.28-9.89s1.34-7.22,4.28-9.89c2.67-2.67,6.14-4.01,9.89-4.01c1.87,0,3.74,0.27,5.61,1.07
					c-2.67,1.07-4.55,3.47-4.55,6.41c0,3.74,2.94,6.68,6.68,6.68c2.67,0,4.55-1.34,5.88-3.47c0.27,1.07,0.54,2.13,0.54,3.47
					C209.73,28.33,208.39,31.53,205.45,34.47z"
            />
          </g>
          <circle cx="49.7" cy="43.82" r="5.07" />
        </g>
        <g>
          <g>
            <path
              d="M77.48,83.9c-0.8-0.54-1.87-0.8-3.21-1.34c-1.34-0.27-2.4-0.54-3.21-0.8c-0.8-0.27-2.13-0.54-3.47-0.8
					c-0.27,0-0.8-0.27-1.6-0.27c-0.8-0.27-1.34-0.27-1.61-0.27c-0.27,0-0.8-0.27-1.34-0.27c-0.8-0.27-1.07-0.27-1.61-0.27
					c-0.27,0-0.8-0.27-1.34-0.54c-0.54-0.27-0.8-0.27-1.34-0.54c-1.07-0.54-1.87-1.07-2.4-1.87c-0.54-0.8-0.8-1.6-0.8-2.67
					c0-0.8,0.27-1.61,0.54-2.4c0.54-0.8,1.07-1.6,1.87-2.13c1.87-1.87,4.55-2.67,7.75-2.67c0.8,0,1.34,0,1.61,0
					c2.94,0.27,5.34,1.34,6.68,2.94c1.34,1.61,2.13,3.21,2.13,5.07v0.27h4.28v-0.54c0-1.34-0.27-2.4-0.54-3.74
					c-0.8-1.87-1.87-3.47-3.21-4.8c-1.6-1.34-3.21-2.4-5.07-2.94c-1.87-0.54-3.74-0.8-5.88-0.8c-1.87,0-4.01,0.27-5.88,1.07
					c-1.87,0.8-3.47,1.61-5.07,2.94c-1.34,1.07-2.13,2.4-2.94,3.74c-0.8,1.34-1.07,2.67-1.07,4.01c0,3.74,1.87,6.41,5.34,8.28
					c0.8,0.54,1.87,0.8,3.21,1.34c1.34,0.27,2.13,0.54,3.21,0.8c0.8,0.27,2.13,0.54,3.47,0.8c0.27,0,0.27,0,0.8,0.27
					c4.01,0.8,6.68,1.6,8.01,2.4c1.07,0.54,1.87,1.07,2.4,1.87c0.54,0.8,0.8,1.6,0.8,2.67c0,1.07-0.27,2.13-1.07,3.21
					c-0.8,0.8-1.6,1.61-2.67,2.13c-1.07,0.54-2.13,0.8-3.21,1.07c-1.07,0.27-2.13,0.27-3.21,0.27c-0.54,0-1.07,0-2.13,0
					c-0.27,0-0.54,0-1.07,0s-1.07-0.27-1.87-0.27c-0.8-0.27-1.61-0.54-2.4-0.8c-0.8-0.27-1.6-0.54-2.4-1.07
					c-0.8-0.54-1.6-1.07-2.13-1.61c-0.54-0.54-1.07-1.34-1.34-2.13c-0.27-0.8-0.54-1.61-0.54-2.67v-0.27l-4.28-0.27v0.27
					c0,4.01,1.87,7.22,5.61,9.89c2.4,1.6,5.61,2.67,9.62,3.21c1.07,0,1.87,0,2.4,0c1.34,0,2.67-0.27,4.01-0.54
					c1.34-0.27,2.67-0.8,4.01-1.34s2.4-1.34,3.47-2.13c1.07-0.8,1.87-1.87,2.4-3.21c0.54-1.34,0.8-2.67,1.07-4.01
					C82.82,88.44,81.22,85.77,77.48,83.9z"
            />
          </g>
          <g>
            <polygon
              points="93.24,67.07 108.2,67.07 108.2,103.41 112.21,103.41 112.21,67.07 126.91,67.07 126.91,62.79 93.24,62.79 				
					"
            />
          </g>
          <g>
            <path
              d="M166.98,86.3c0,3.47-1.34,6.41-3.74,9.08c-2.4,2.4-5.34,3.74-9.08,3.74c-3.47,0-6.41-1.34-8.81-3.74
					s-3.74-5.61-3.74-9.08V62.79h-4.28v23.78c0,2.4,0.54,4.55,1.34,6.68c0.8,2.13,2.13,3.74,3.74,5.34c1.61,1.6,3.21,2.67,5.34,3.47
					c2.13,0.8,4.28,1.34,6.68,1.34c2.94,0,5.88-0.8,8.55-2.4c2.67-1.6,4.55-3.47,6.14-6.14c1.61-2.67,2.13-5.34,2.4-8.28V62.8h-4.28
					L166.98,86.3z"
            />
          </g>
          <g>
            <path
              d="M205.99,66.26c-3.47-2.13-7.22-3.47-11.22-3.47h-13.09v40.6h13.09c2.67,0,5.34-0.54,8.01-1.6
					c2.4-1.07,4.55-2.4,6.41-4.28c1.87-1.87,3.21-4.01,4.28-6.41s1.61-5.07,1.61-7.75c0-2.67-0.54-5.34-1.61-7.75
					C212.13,71.62,209.46,68.41,205.99,66.26z M208.66,91.11c-1.34,2.4-3.47,4.28-5.88,5.88c-2.4,1.34-5.07,2.13-8.01,2.13h-8.81
					V67.06h8.81c2.94,0,5.61,0.8,8.01,2.13c2.4,1.34,4.28,3.47,5.88,5.88c1.34,2.4,2.13,5.07,2.13,8.01
					C210.79,86.04,210.25,88.71,208.66,91.11z"
            />
          </g>
          <g>
            <rect x="228.43" y="62.79" width="4.28" height="40.6" />
          </g>
          <g>
            <path
              d="M280.52,68.68c-1.87-1.87-4.01-3.21-6.41-4.28c-2.4-1.07-5.07-1.61-7.75-1.61c-2.67,0-5.34,0.54-8.01,1.61
					c-2.4,1.07-4.55,2.4-6.41,4.28c-1.87,1.87-3.21,4.01-4.28,6.41c-1.07,2.4-1.6,5.07-1.6,7.75c0,3.74,0.8,7.22,2.67,10.15
					c1.87,3.21,4.28,5.61,7.48,7.48c3.21,1.87,6.41,2.67,10.15,2.67c2.67,0,5.34-0.54,8.01-1.61c2.4-1.07,4.55-2.4,6.41-4.28
					c1.87-1.87,3.21-4.01,4.28-6.41c1.07-2.4,1.61-5.07,1.61-7.75c0-2.67-0.54-5.34-1.61-8.01
					C283.99,72.68,282.39,70.54,280.52,68.68z M280.26,91.11c-1.34,2.4-3.47,4.28-5.88,5.88c-2.4,1.34-5.07,2.13-8.01,2.13
					s-5.61-0.8-8.01-2.13c-2.4-1.34-4.28-3.47-5.88-5.88c-1.34-2.4-2.13-5.07-2.13-8.01c0-2.94,0.8-5.61,2.13-8.01
					c1.34-2.4,3.47-4.28,5.88-5.88c2.4-1.34,5.07-2.13,8.01-2.13s5.61,0.8,8.01,2.13c2.4,1.34,4.28,3.47,5.88,5.88
					c1.34,2.4,2.13,5.07,2.13,8.01C282.39,86.04,281.59,88.71,280.26,91.11z"
            />
          </g>
          <g>
            <g>
              <path
                d="M22.17,84.7H16.3v5.08h5.88c0.8,0,1.34-0.27,1.87-0.8c0.54-0.54,0.8-1.07,0.8-1.87c0-0.8-0.27-1.34-0.8-1.87
						C23.51,84.96,22.98,84.7,22.17,84.7z"
              />
            </g>
            <g>
              <path
                d="M18.97,64.13C8.55,64.13,0,72.68,0,83.1s8.55,18.97,18.97,18.97s18.97-8.55,18.97-18.97
						C37.94,72.68,29.39,64.13,18.97,64.13z M27.52,92.45c-1.34,1.34-3.21,2.13-5.34,2.13H11.23v-23.5h9.62
						c1.87,0,3.47,0.54,4.8,1.87c1.34,1.34,1.87,2.94,1.87,4.8c0,1.07-0.27,2.4-0.8,3.21c0.27,0.27,0.54,0.54,0.8,0.54
						c1.6,1.61,2.13,3.21,2.13,5.34C29.66,89.24,28.85,91.11,27.52,92.45z"
              />
            </g>
            <g>
              <path
                d="M22.17,79.36c0.27-0.27,0.54-0.8,0.54-1.34c0-0.54-0.27-0.8-0.54-1.34c-0.27-0.27-0.8-0.54-1.34-0.54h-4.8v3.47h4.8
						C21.38,79.89,21.91,79.62,22.17,79.36z"
              />
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
);

export const RumorIcon: FC<IconSvgProps> = ({ size, width = 250, height, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size || width}
    height={size || height}
    viewBox="0 0 217.82 115.5"
    {...props}
  >
    <g transform="translate(0.000000,1180.000000) scale(0.100000,-0.100000)">
      <path
        d="M15.52,11701.01c-0.9-53.09-1.58-118.99-1.58-146.43v-50.16h57.35h57.35v34.86v34.86h51.29l51.06-0.23l26.99-35.76
		l26.99-35.99h60.28c46.78,0,59.83,0.68,58.71,2.7c-0.9,1.58-14.85,19.79-30.81,40.71c-15.97,20.69-28.79,38.24-28.34,38.47
		c0.45,0.45,4.28,2.48,8.54,4.73c10.8,5.4,30.14,24.29,38.24,36.89c21.59,33.96,21.59,83.45,0,117.41
		c-8.99,14.17-28.12,31.71-41.62,38.69c-25.42,12.82-23.17,12.6-184.22,14.4l-148.91,1.35L15.52,11701.01z M279.82,11706.41
		c8.32-3.15,13.72-12.15,13.72-22.94c0-7.42-1.35-10.12-8.09-16.42l-8.32-7.42h-67.25c-36.89,0-70.4,0.68-74.23,1.35l-6.97,1.58
		v22.94c0,12.6,0.68,23.62,1.58,24.52C132.71,11712.49,272.84,11709.11,279.82,11706.41z"
      />
      <path
        d="M417.69,11730.02c-2.03-78.27-0.68-121.01,4.5-137.88c6.52-21.14,16.65-37.56,32.84-52.86
		c24.29-22.72,54.65-35.31,104.36-42.73c26.32-3.83,89.3-4.5,115.16-0.9c75.13,10.12,119.66,40.72,136.99,93.57
		c2.93,8.54,4.05,30.13,5.85,104.81c1.35,51.74,2.03,94.47,1.35,94.92c-0.45,0.45-26.32,1.58-57.13,2.48l-56.45,1.58l-1.58-82.1
		c-0.68-44.98-2.48-85.47-3.6-89.75c-6.97-25.19-39.82-37.79-92.22-35.09c-29.47,1.35-44.76,5.39-57.8,14.85
		c-17.55,12.6-17.55,12.82-17.55,107.29v83.45l-21.37,1.58c-11.7,0.68-37.11,1.35-56.45,1.35h-35.31L417.69,11730.02z"
      />
      <path
        d="M1501.4,11789.86c-28.12-2.7-60.73-11.47-82.77-22.04c-34.64-16.87-56.9-45.88-65.23-84.57
		c-4.95-23.84-4.5-72.65,1.13-94.24c13.95-54.88,54.65-86.15,128.66-98.97c48.13-8.32,115.83-6.52,158.35,4.28
		c30.81,7.87,51.96,18.89,70.85,36.44c27.44,25.87,37.79,55.55,38.01,108.19c0,57.36-16.42,94.24-53.31,118.76
		C1655.47,11785.35,1581.7,11797.27,1501.4,11789.86z M1577.65,11696.74c26.99-2.48,46.78-14.4,54.43-33.06
		c2.25-5.18,3.6-15.3,3.6-26.09c0-42.96-22.94-59.16-84.35-59.16c-43.41,0-66.57,7.42-79.17,25.64c-5.63,8.09-6.29,11.25-6.97,31.26
		c-0.68,19.12-0.23,23.39,4.05,32.16c8.99,18.45,26.09,27.22,58.48,30.14C1546.38,11699.44,1551.79,11699.21,1577.65,11696.74z"
      />
      <path
        d="M827.51,11752.52c-0.9-20.47-1.58-86.37-1.58-146.21v-108.64h56.23c43.41,0,56.23,0.68,56.45,2.93
		c0.23,1.35,1.13,35.99,1.8,76.7l1.35,74.23l56.23-78.05l56-78.05h28.57h28.81l56.9,76.48l56.9,76.48l0.68-76.03l0.45-76.25
		l15.3-1.35c8.32-0.9,33.51-1.58,56-1.58c40.72,0,41.17,0,42.28,5.18c0.68,2.7,1.35,68.38,1.58,145.98l0.68,140.8l-33.74,1.58
		c-18.44,0.68-50.84,1.12-71.75,0.68l-38.01-0.68l-56.45-71.3c-31.04-39.14-57.13-71.3-58.03-71.3
		c-0.9-0.23-26.77,32.61-57.35,72.65l-55.78,73.1h-71.08l-71.08,0.23L827.51,11752.52z"
      />
      <path
        d="M1760.52,11780.19c-0.45-1.35-1.35-67.48-1.8-146.88l-1.13-144.63h57.13h57.13v35.99v35.99h47.01
		c25.87,0,49.49-0.9,52.41-2.03c2.93-1.12,17.32-17.77,31.94-37.11l26.77-35.09h60.51h60.73l-4.28,5.39
		c-2.25,3.15-16.42,21.82-31.49,41.62l-27.44,35.76l11.7,6.74c6.52,3.83,17.1,12.37,23.62,19.57
		c40.27,44.08,38.69,109.54-3.83,152.05c-16.87,16.65-33.29,25.42-56,30.14C2043.48,11781.76,1761.64,11784.01,1760.52,11780.19z
		 M2023.69,11692.01c15.75-7.42,18.66-29.02,5.4-40.04l-6.97-5.85h-74h-74v24.74v24.74h71.08
		C2005.24,11695.61,2017.38,11695.16,2023.69,11692.01z"
      />
      <path
        d="M111.12,11436.95c-44.98-3.83-77.83-15.97-94.92-35.31c-14.4-16.42-19.57-40.94-12.15-58.71
		c12.15-29.25,49.49-42.06,140.35-47.68c43.18-2.7,61.86-5.4,66.57-9.22c8.09-6.75-0.68-17.77-17.99-22.72
		c-4.95-1.58-21.82-2.7-37.34-2.7c-32.39-0.22-47.01,3.6-57.35,14.4l-6.52,6.74H45.89H0l1.58-8.32
		c5.85-32.39,28.79-53.09,70.4-63.88c34.41-8.77,122.36-9.45,160.15-0.9s63.66,27.22,70.85,51.29
		c11.02,37.34-7.42,62.53-54.65,74.45c-20.02,5.18-42.73,7.87-92.89,11.25c-49.71,3.6-62.76,6.52-62.76,14.62
		c0,5.4,8.54,12.37,19.79,16.42c11.02,3.83,63.66,3.83,76.48,0c5.4-1.58,13.5-6.53,18.21-10.8l8.54-7.64h45.66h45.43l-1.58,8.54
		c-4.5,23.84-21.59,45.43-44.53,55.33C229.88,11435.82,170.05,11441.67,111.12,11436.95z"
      />
      <path
        d="M314.45,11426.59c-0.68-2.03-1.35-52.64-1.35-112.47v-108.87h43.86h43.86v26.99v26.77l76.03,0.68l75.8,0.68l15.07,7.42
		c30.81,15.07,47.46,42.06,47.68,76.93c0.23,16.87-0.68,20.92-6.97,34.19c-12.37,26.32-34.64,43.63-62.53,48.81
		c-8.32,1.58-53.09,2.48-121.69,2.48C327.5,11430.2,315.58,11429.75,314.45,11426.59z M520.49,11358.89
		c11.02-9.89,9.44-24.74-3.15-31.26c-5.85-2.93-14.62-3.15-61.63-1.8l-54.88,1.58v19.12v19.12l57.58-1.35
		C509.69,11363.17,516.44,11362.5,520.49,11358.89z"
      />
      <path
        d="M623.5,11363.17c0-35.76-0.68-86.37-1.58-112.47l-1.35-47.68h44.08h44.31v9.67c0,5.4,0.68,17.55,1.35,26.99l1.58,17.32
		h38.46h38.46l21.14-28.12l21.14-28.12h46.78h47.01l-23.62,30.59c-13.05,16.87-23.62,31.49-23.62,32.16c0,0.68,4.73,4.28,10.35,7.87
		c13.27,8.32,26.32,24.97,32.39,41.17c7.19,19.11,5.63,48.36-3.38,66.57c-8.32,16.87-27.67,34.86-45.21,42.06l-13.27,5.62
		l-117.41,0.68l-117.64,0.68v-65.02h0.03V11363.17z M785.68,11361.15c38.92-1.35,41.39-1.8,46.33-6.52
		c7.87-7.87,6.97-19.12-1.8-26.54c-6.52-5.62-8.32-5.85-32.16-5.85c-13.95,0-39.14,0.68-56,1.58l-30.81,1.35v18.89v18.66h16.42
		C736.87,11362.72,762.74,11362.05,785.68,11361.15z"
      />
      <path
        d="M933.23,11387.01c-0.9-21.37-1.58-71.98-1.58-112.24v-73.33l81.42-1.35c44.76-0.9,103.91-1.58,131.58-1.58h50.16v29.25
		v29.24h-87.73h-87.73v14.62v14.85l88.4-0.23l88.18-0.23l0.68,25.87l0.68,26.09h-87.5c-48.13,0-87.95,0.45-88.4,0.9
		c-0.45,0.45-0.45,7.19-0.23,14.62l0.9,13.72h87.5h87.5v27.67v27.89l-69.05,1.35c-38.24,0.9-97.17,1.58-131.36,1.58h-62.08
		L933.23,11387.01z"
      />
      <path
        d="M1312.46,11399.38c-29.92-53.98-106.61-194.57-107.97-197.49c-0.9-2.93,5.85-3.38,48.13-3.38h49.26l8.99,18.66l8.77,18.45
		h15.3c8.32,0,33.74-0.45,56.45-0.68l41.17-0.45l8.54-19.11l8.54-19.12h49.26h49.04l-5.85,11.7
		c-7.42,14.62-111.34,212.1-111.79,212.33c-0.23,0.23-23.84,1.13-52.41,2.03l-51.96,1.58L1312.46,11399.38z M1392.53,11322.91
		c7.42-16.87,13.27-31.04,12.82-31.49c-0.45-0.45-13.95-0.45-30.14-0.22l-29.25,0.68l14.85,31.04c8.09,16.87,15.3,30.81,16.2,30.81
		C1377.9,11353.73,1384.89,11339.99,1392.53,11322.91z"
      />
      <path
        d="M1981.17,11421.2c-60.06-5.85-96.49-25.19-105.71-56.45c-11.25-37.56,5.63-61.18,53.09-73.78
		c22.04-6.07,42.96-8.77,88.4-11.47c61.18-3.83,72.2-6.97,66.8-18.89c-1.35-3.15-5.4-7.19-9.22-8.99
		c-16.87-8.77-66.13-10.12-88.18-2.48c-5.4,2.03-12.82,6.53-16.65,10.12l-6.74,6.52l-45.66,0.68l-45.88,0.68l1.58-8.99
		c4.95-31.94,27.67-52.86,70.4-64.78c15.97-4.28,22.72-4.73,81.42-4.73c71.08,0,83.45,1.8,114.03,16.65
		c40.49,19.79,51.74,68.15,22.04,94.24c-20.47,17.77-49.71,24.52-134.51,30.59c-49.49,3.6-62.31,6.53-62.31,14.4
		c0,5.4,8.54,12.37,19.79,16.42c11.25,3.83,63.88,3.83,76.48,0c5.4-1.58,13.5-6.52,18.22-10.8l8.54-7.64h45.66h45.43l-1.58,8.54
		c-6.74,37.34-36.89,60.06-89.98,67.7C2063.72,11422.1,2004.34,11423.45,1981.17,11421.2z"
      />
      <path
        d="M1556.51,11309.41c-0.45-61.63-0.45-112.47,0-113.14c0.45-0.68,49.26-1.35,108.42-1.8c116.06-0.9,119.44-0.68,142.6,11.25
		c11.7,5.85,31.04,24.29,39.59,37.56c12.37,19.34,16.42,34.64,16.65,62.08c0.23,37.11-9.44,61.18-34.19,84.8
		c-28.57,27.44-32.61,28.12-165.09,29.91l-107.07,1.35L1556.51,11309.41z M1758.27,11342.7c19.57-11.25,24.29-43.18,9.67-63.88
		c-8.54-12.15-12.6-12.82-70.4-12.82h-52.86v41.83v42.07l53.54-1.8C1742.52,11346.97,1752.64,11345.85,1758.27,11342.7z"
      />
      <path
        d="M188.27,11138.01c-2.48-3.6-14.62-18.45-26.99-33.06c-12.37-14.62-38.69-45.88-58.48-69.5s-50.84-60.73-69.28-82.55
		l-33.06-39.59l0.45-63.21l0.68-62.98l15.07,18.44c8.09,10.12,29.92,36.21,48.36,58.03c89.75,106.61,123.94,147.33,130.01,154.97
		c3.83,4.73,28.34,33.96,54.65,65.01c26.09,31.04,47.68,57.35,47.68,58.7s-17.99,2.25-52.19,2.25h-52.41L188.27,11138.01z"
      />
      <path
        d="M586.39,11134.19c-3.6-3.6-29.25-33.51-56.45-66.35c-27.44-32.61-56.23-67.02-64.11-76.25
		c-14.62-17.32-67.25-80.07-101.22-120.56c-10.35-12.37-39.59-47.24-65.01-77.61c-25.42-30.14-54.88-65.01-65.23-77.38
		s-24.07-28.57-30.81-36.21c-6.52-7.64-11.92-14.85-11.92-16.42c0-1.58,8.32-2.48,26.54-2.48c14.85,0,37.34-0.68,50.16-1.35
		l23.39-1.58l19.11,22.49c10.57,12.15,41.84,49.49,69.73,82.77c27.89,33.06,75.35,89.97,105.71,125.96
		c30.36,35.99,85.92,102.34,123.71,147.33c37.79,44.98,72.65,86.15,77.38,91.54c4.73,5.4,8.32,10.12,7.87,10.57
		c-0.45,0.68-23.62,1.35-51.51,1.8l-50.61,0.68L586.39,11134.19z"
      />
      <path
        d="M960.45,11104.72c-15.07-17.99-35.76-42.73-45.66-54.65s-25.19-30.37-33.96-40.72s-30.59-36.21-48.36-57.35
		s-52.64-62.53-77.38-91.99c-47.68-56.68-119.21-141.93-147.33-175.44c-9.22-11.25-17.77-20.92-18.89-21.59
		c-1.13-0.9-1.13-2.7-0.45-4.05c1.13-1.8,17.55-2.48,52.64-2.48c46.33,0,51.29,0.45,53.54,4.05s46.11,55.78,161.28,192.54
		c24.97,29.7,59.16,70.18,75.8,90.2c16.65,20.02,43.41,51.96,59.61,71.08c15.97,19.12,39.59,47.23,52.64,62.76
		c12.82,15.52,28.79,34.19,35.54,41.83c6.52,7.64,11.92,14.85,11.92,16.42c0,1.8-14.4,2.48-51.51,2.48h-51.51L960.45,11104.72z"
      />
      <path
        d="M1339.68,11079.98c-25.87-30.81-59.16-70.4-74.23-88.4c-15.07-17.99-33.74-40.26-41.62-49.49
		c-7.87-9.22-34.64-41.17-59.38-70.85c-57.35-68.38-140.13-166.67-163.74-194.57l-18.21-21.37l30.36-1.35
		c16.65-0.9,40.04-1.58,51.96-1.8l21.59-0.23l57.13,67.7c31.26,37.34,87.73,104.36,125.06,149.13
		c37.56,44.53,83.22,98.75,101.22,120.34c18.22,21.37,36.21,42.74,39.82,47.46c3.83,4.73,23.17,27.89,43.41,51.51
		c20.02,23.84,35.99,44.08,35.31,45.21c-0.9,1.35-22.04,2.25-51.74,2.25h-50.16L1339.68,11079.98z"
      />
      <path
        d="M1764.79,11110.13c-16.2-19.11-94.24-112.24-192.76-229.65c-20.92-24.97-44.31-52.86-52.19-62.08
		c-29.7-35.31-92.22-109.77-106.61-127.08c-8.09-9.67-18.66-22.04-23.39-27.44c-4.73-5.18-8.09-10.57-7.19-11.92
		s19.11-2.25,51.74-2.25h50.16l34.41,41.17c18.89,22.49,35.09,41.38,35.76,42.06s10.35,12.15,21.37,25.42
		c24.74,29.91,31.04,37.34,66.35,79.17c15.52,18.44,34.19,40.71,41.62,49.71c15.97,19.12,60.28,71.98,98.75,117.64
		c14.85,17.77,36.66,43.63,48.36,57.35c11.47,13.72,28.34,33.74,37.56,44.53c9.22,10.57,16.65,20.47,16.65,21.82
		c0,1.8-15.52,2.48-51.29,2.48h-51.29L1764.79,11110.13z"
      />
      <path
        d="M2138.17,11078.86c-42.06-50.61-91.32-109.09-156.33-186.24c-25.42-30.37-59.83-71.3-76.48-91.32
		c-75.58-90.42-113.59-135.41-120.79-143.05c-7.19-7.42-7.42-8.32-3.6-10.35c2.48-1.12,25.64-2.25,51.74-2.48l47.46-0.45
		l34.64,40.94c19.11,22.49,37.79,44.53,41.39,49.26c3.83,4.73,17.32,20.92,30.36,36.21c12.82,15.3,50.16,59.83,83,98.75
		c32.61,38.91,64.11,76.25,69.73,83c5.62,6.74,16.2,19.12,23.39,27.89l12.82,15.75v62.53c0,34.64-0.23,62.76-0.68,62.76
		C2174.61,11122.05,2157.96,11102.47,2138.17,11078.86z"
      />
    </g>
  </svg>
);

export const HalfIcon: FC<IconSvgProps> = ({ size, width = 250, height, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size || width}
    height={size || height}
    viewBox="0 0 453.54 211.89"
    {...props}
  >
    <path
      d="M284.36,17.43l-5.08-16c-0.4-0.88-1.28-1.45-2.25-1.45c-1.83,0-3.55,1.39-5.16,4.19l-6.79,11.76
	c-12.45-0.76-25.25-1.16-38.31-1.16C101.53,14.79,0,51.06,0,95.8c0,38.18,74,70.19,173.5,78.75l-3.83,6.63
	c-1.29,2.26-1.95,4.81-1.93,7.41c-0.07,1.52,0.28,3.02,1,4.36l5.55,17.49c0.45,0.91,1.39,1.48,2.41,1.45c1.72,0,3.39-1.4,5-4.19
	l18.15-31.44c8.83,0.38,17.81,0.57,26.92,0.57c125.24,0,226.77-36.26,226.77-81C453.54,58.17,381.71,26.53,284.36,17.43z
	 M25.19,95.8c0-39.18,93.19-70.93,208.14-70.93c8.9,0,17.66,0.19,26.28,0.56l-2.51,4.34c-8.06-0.2-16.25-0.27-24.55-0.27
	C123,29.5,34.19,59.55,34.19,96.62c0,31.05,62.28,57.17,146.87,64.84l-1.65,2.86C90.6,156.26,25.19,128.61,25.19,95.8z
	 M199.73,54.88h-23.21c-3.73-0.05-7.34,1.33-10.08,3.87c-2.85,2.58-22.61,2.51-26.37,2.51c-2.16,0-14.63,11.47-14.63,14.3
	c0,3.76,29.38-1,28.09,1.19l-36.26,55.51c-0.49,0.89-0.82,1.86-1,2.86C92.64,124.9,78.5,111.7,78.5,96.62
	c0-35.71,78.49-58.8,175.23-61l-67.82,117.39c-21.54-3-40.9-7.44-57.07-13h21.69c2.4-0.11,4.71-0.89,6.69-2.25
	c2.25-1.33,4.11-3.21,5.4-5.48l40.29-69.66c0.69-1.18,1.08-2.51,1.13-3.87C204.07,56.17,202.63,54.88,199.73,54.88z M233.33,166.73
	c-9.33,0-18.54-0.21-27.62-0.63l1.66-2.89c8.25,0.36,16.65,0.54,25.18,0.54c32.87,0,52.79,0,91.15-7.49
	c-6.67,1.3-43.64,1.37-68.25,1.37c-15.11,0-29.79-0.61-43.83-1.77l69.46-120.2c18.68,0.88,40.54,0.84,42.62,1.33
	c-13.16-2.99-26.53-4.96-40-5.89c0.69-1.27,1.22-2.61,1.59-4c48.43,4.24,90,14.27,118.11,27.79h-92.1c-5.16,0-8.49,1.29-10,3.87
	l-6.76,11.6c-0.7,1.18-1.09,2.53-1.13,3.9c0,2.58,1.45,3.87,4.35,3.87h38.69c2.45-0.09,4.83-0.88,6.85-2.26
	c2.24-1.33,4.1-3.22,5.4-5.48c1.37-2.23,3.25-4.11,5.48-5.48c1.98-1.39,4.31-2.19,6.73-2.29c2.9,0,4.35,1.29,4.35,3.87
	c-0.05,1.36-0.44,2.69-1.13,3.87l-4.51,7.74c-1.29,2.27-3.15,4.15-5.4,5.48c-1.98,1.36-4.29,2.14-6.69,2.25h-54.12
	c-2.45,0.1-4.82,0.88-6.85,2.26c-2.25,1.33-4.11,3.21-5.4,5.48l-22.41,38.69c-0.69,1.18-1.08,2.51-1.13,3.87
	c0,2.57,1.51,3.85,4.52,3.86h108.32c5.16,0,8.49-1.29,10-3.86l11.13-19.35c0.69-1.18,1.07-2.51,1.12-3.87
	c0-2.57-1.45-3.87-4.35-3.87h-38.7c-2.45,0.09-4.82,0.86-6.85,2.22c-2.24,1.33-4.1,3.22-5.4,5.48l-4.5,7.78
	c-1.29,2.27-3.15,4.15-5.4,5.48c-2.02,1.38-4.4,2.17-6.85,2.26c-2.9,0-4.35-1.28-4.35-3.83c0.06-1.37,0.5-2.7,1.26-3.84l13.34-23.22
	c1.35-2.24,3.21-4.14,5.43-5.52c1.97-1.4,4.3-2.19,6.71-2.28h54.16c2.43-0.09,4.78-0.87,6.77-2.26c2.23-1.37,4.11-3.25,5.48-5.48
	l11.84-20.57c12.93,9.24,20.18,19.58,20.18,30.5C441.48,134.97,348.29,166.73,233.33,166.73L233.33,166.73z"
    />
  </svg>
);
