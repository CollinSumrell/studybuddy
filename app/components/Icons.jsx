const defaultColor = "#1C1B1F";

export function ChevronRight({ color = defaultColor }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill={color}
    >
      <path
        d="M12.5941 12.3965L7.99414 7.79648L9.39414 6.39648L15.3941 12.3965L9.39414 18.3965L7.99414 16.9965L12.5941 12.3965Z"
        fill={color}
      />
    </svg>
  );
}

export function ChevronLeft({ color = defaultColor }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill={color}
    >
      <path
        d="M13.9941 18.3965L7.99414 12.3965L13.9941 6.39648L15.3941 7.79648L10.7941 12.3965L15.3941 16.9965L13.9941 18.3965Z"
        fill={color}
      />
    </svg>
  );
}

export function ExpandMore({ color = defaultColor }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill={color}
    >
      <path
        d="M11.9941 15.7716L5.99414 9.77158L7.39414 8.37158L11.9941 12.9716L16.5941 8.37158L17.9941 9.77158L11.9941 15.7716Z"
        fill={color}
      />
    </svg>
  );
}

export function ExpandLess({ color = defaultColor }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill={color}
    >
      <path
        d="M7.39414 15.7716L5.99414 14.3716L11.9941 8.37158L17.9941 14.3716L16.5941 15.7716L11.9941 11.1716L7.39414 15.7716Z"
        fill={color}
      />
    </svg>
  );
}

export function MoreHoriz({ color = defaultColor }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill={color}
    >
      <path
        d="M6.13672 14.2646C5.58672 14.2646 5.11589 14.0688 4.72422 13.6771C4.33255 13.2855 4.13672 12.8146 4.13672 12.2646C4.13672 11.7146 4.33255 11.2438 4.72422 10.8521C5.11589 10.4605 5.58672 10.2646 6.13672 10.2646C6.68672 10.2646 7.15755 10.4605 7.54922 10.8521C7.94089 11.2438 8.13672 11.7146 8.13672 12.2646C8.13672 12.8146 7.94089 13.2855 7.54922 13.6771C7.15755 14.0688 6.68672 14.2646 6.13672 14.2646ZM12.1367 14.2646C11.5867 14.2646 11.1159 14.0688 10.7242 13.6771C10.3326 13.2855 10.1367 12.8146 10.1367 12.2646C10.1367 11.7146 10.3326 11.2438 10.7242 10.8521C11.1159 10.4605 11.5867 10.2646 12.1367 10.2646C12.6867 10.2646 13.1576 10.4605 13.5492 10.8521C13.9409 11.2438 14.1367 11.7146 14.1367 12.2646C14.1367 12.8146 13.9409 13.2855 13.5492 13.6771C13.1576 14.0688 12.6867 14.2646 12.1367 14.2646ZM18.1367 14.2646C17.5867 14.2646 17.1159 14.0688 16.7242 13.6771C16.3326 13.2855 16.1367 12.8146 16.1367 12.2646C16.1367 11.7146 16.3326 11.2438 16.7242 10.8521C17.1159 10.4605 17.5867 10.2646 18.1367 10.2646C18.6867 10.2646 19.1576 10.4605 19.5492 10.8521C19.9409 11.2438 20.1367 11.7146 20.1367 12.2646C20.1367 12.8146 19.9409 13.2855 19.5492 13.6771C19.1576 14.0688 18.6867 14.2646 18.1367 14.2646Z"
        fill={color}
      />
    </svg>
  );
}

export function Check({ color = defaultColor }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill={color}
    >
      <path
        d="M9.6668 18.2413L3.9668 12.5413L5.3918 11.1163L9.6668 15.3913L18.8418 6.21631L20.2668 7.64131L9.6668 18.2413Z"
        fill={color}
      />
    </svg>
  );
}

export function Close({ color = defaultColor }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={color}
    >
      <path
        d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z"
        fill={color}
      />
    </svg>
  );
}

export function CalendarMonth({ color = defaultColor }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={color}
    >
      <path
        d="M5 22C4.45 22 3.97917 21.8042 3.5875 21.4125C3.19583 21.0208 3 20.55 3 20V6C3 5.45 3.19583 4.97917 3.5875 4.5875C3.97917 4.19583 4.45 4 5 4H6V2H8V4H16V2H18V4H19C19.55 4 20.0208 4.19583 20.4125 4.5875C20.8042 4.97917 21 5.45 21 6V20C21 20.55 20.8042 21.0208 20.4125 21.4125C20.0208 21.8042 19.55 22 19 22H5ZM5 20H19V10H5V20ZM5 8H19V6H5V8ZM12 14C11.7167 14 11.4792 13.9042 11.2875 13.7125C11.0958 13.5208 11 13.2833 11 13C11 12.7167 11.0958 12.4792 11.2875 12.2875C11.4792 12.0958 11.7167 12 12 12C12.2833 12 12.5208 12.0958 12.7125 12.2875C12.9042 12.4792 13 12.7167 13 13C13 13.2833 12.9042 13.5208 12.7125 13.7125C12.5208 13.9042 12.2833 14 12 14ZM8 14C7.71667 14 7.47917 13.9042 7.2875 13.7125C7.09583 13.5208 7 13.2833 7 13C7 12.7167 7.09583 12.4792 7.2875 12.2875C7.47917 12.0958 7.71667 12 8 12C8.28333 12 8.52083 12.0958 8.7125 12.2875C8.90417 12.4792 9 12.7167 9 13C9 13.2833 8.90417 13.5208 8.7125 13.7125C8.52083 13.9042 8.28333 14 8 14ZM16 14C15.7167 14 15.4792 13.9042 15.2875 13.7125C15.0958 13.5208 15 13.2833 15 13C15 12.7167 15.0958 12.4792 15.2875 12.2875C15.4792 12.0958 15.7167 12 16 12C16.2833 12 16.5208 12.0958 16.7125 12.2875C16.9042 12.4792 17 12.7167 17 13C17 13.2833 16.9042 13.5208 16.7125 13.7125C16.5208 13.9042 16.2833 14 16 14ZM12 18C11.7167 18 11.4792 17.9042 11.2875 17.7125C11.0958 17.5208 11 17.2833 11 17C11 16.7167 11.0958 16.4792 11.2875 16.2875C11.4792 16.0958 11.7167 16 12 16C12.2833 16 12.5208 16.0958 12.7125 16.2875C12.9042 16.4792 13 16.7167 13 17C13 17.2833 12.9042 17.5208 12.7125 17.7125C12.5208 17.9042 12.2833 18 12 18ZM8 18C7.71667 18 7.47917 17.9042 7.2875 17.7125C7.09583 17.5208 7 17.2833 7 17C7 16.7167 7.09583 16.4792 7.2875 16.2875C7.47917 16.0958 7.71667 16 8 16C8.28333 16 8.52083 16.0958 8.7125 16.2875C8.90417 16.4792 9 16.7167 9 17C9 17.2833 8.90417 17.5208 8.7125 17.7125C8.52083 17.9042 8.28333 18 8 18ZM16 18C15.7167 18 15.4792 17.9042 15.2875 17.7125C15.0958 17.5208 15 17.2833 15 17C15 16.7167 15.0958 16.4792 15.2875 16.2875C15.4792 16.0958 15.7167 16 16 16C16.2833 16 16.5208 16.0958 16.7125 16.2875C16.9042 16.4792 17 16.7167 17 17C17 17.2833 16.9042 17.5208 16.7125 17.7125C16.5208 17.9042 16.2833 18 16 18Z"
        fill={color}
      />
    </svg>
  );
}

export function Add({ color = defaultColor }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={color}
    >
      <path d="M11 13H5V11H11V5H13V11H19V13H13V19H11V13Z" fill={color} />
    </svg>
  );
}

export function CalendarViewWeek({ color = defaultColor }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={color}
    >
      <path
        d="M4 20C3.45 20 2.97917 19.8042 2.5875 19.4125C2.19583 19.0208 2 18.55 2 18V6C2 5.45 2.19583 4.97917 2.5875 4.5875C2.97917 4.19583 3.45 4 4 4H20C20.55 4 21.0208 4.19583 21.4125 4.5875C21.8042 4.97917 22 5.45 22 6V18C22 18.55 21.8042 19.0208 21.4125 19.4125C21.0208 19.8042 20.55 20 20 20H4ZM13 18H15.5V6H13V18ZM8.5 18H11V6H8.5V18ZM4 18H6.5V6H4V18ZM17.5 18H20V6H17.5V18Z"
        fill={color}
      />
    </svg>
  );
}

export function CalendarViewMonth({ color = defaultColor }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={color}
    >
      <path
        d="M4.8833 20.1978C4.3333 20.1978 3.86247 20.0019 3.4708 19.6103C3.07913 19.2186 2.8833 18.7478 2.8833 18.1978V6.19775C2.8833 5.64775 3.07913 5.17692 3.4708 4.78525C3.86247 4.39359 4.3333 4.19775 4.8833 4.19775H20.8833C21.4333 4.19775 21.9041 4.39359 22.2958 4.78525C22.6875 5.17692 22.8833 5.64775 22.8833 6.19775V18.1978C22.8833 18.7478 22.6875 19.2186 22.2958 19.6103C21.9041 20.0019 21.4333 20.1978 20.8833 20.1978H4.8833ZM4.8833 11.1978H8.8833V6.19775H4.8833V11.1978ZM10.8833 11.1978H14.8833V6.19775H10.8833V11.1978ZM16.8833 11.1978H20.8833V6.19775H16.8833V11.1978ZM8.8833 18.1978V13.1978H4.8833V18.1978H8.8833ZM10.8833 18.1978H14.8833V13.1978H10.8833V18.1978ZM16.8833 18.1978H20.8833V13.1978H16.8833V18.1978Z"
        fill={color}
      />
    </svg>
  );
}

// Special Icon, used for RSVP
export function HandThumbsUp({ color = defaultColor }) {
  return (
    <svg
      className="cursor-pointer fill-stone-300 hover:fill-lime-500"
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="22"
      viewBox="0 0 21 22"
    >
      <path d="M0.492188 14.5782C0.492188 17.7325 2.55274 20.3887 5.04297 20.3887H8.15821C9.39844 21.043 10.9024 21.4239 12.582 21.4239H13.8906C15.0625 21.4239 16.0781 21.3555 16.752 21.1895C18.0606 20.8672 18.8809 19.959 18.8809 18.8067C18.8809 18.5625 18.8418 18.3477 18.7832 18.1329C19.4277 17.6446 19.7891 16.9317 19.7891 16.1504C19.7891 15.7696 19.711 15.3887 19.5742 15.086C20.0137 14.6368 20.2578 13.9825 20.2578 13.2989C20.2578 12.8594 20.1504 12.3907 19.9649 12.0489C20.2285 11.668 20.3848 11.1309 20.3848 10.5645C20.3848 9.1582 19.2813 8.04492 17.875 8.04492H14.3106C14.0957 8.04492 13.959 7.94727 13.959 7.76172C13.959 6.74609 15.5606 4.36328 15.5606 2.44922C15.5606 1.13086 14.6426 0.193359 13.3828 0.193359C12.4551 0.193359 11.8301 0.671875 11.2149 1.84375C10.0723 4.04102 8.70508 6.01367 6.47852 8.72852H4.69141C2.36719 8.72852 0.492188 11.3555 0.492188 14.5782ZM5.99024 14.5293C5.99024 12.4883 6.44922 11.1895 7.71875 9.48047C9.13477 7.58594 11.0977 5.32031 12.5137 2.50781C12.8652 1.79492 13.0996 1.63867 13.4414 1.63867C13.8418 1.63867 14.1152 1.92188 14.1152 2.44922C14.1152 3.97266 12.5137 6.27734 12.5137 7.76172C12.5137 8.83594 13.3926 9.49024 14.5156 9.49024H17.875C18.4805 9.49024 18.9395 9.94922 18.9395 10.5645C18.9395 11.0137 18.793 11.2969 18.4317 11.668C18.2559 11.8243 18.2363 12.0196 18.3828 12.2051C18.6856 12.6543 18.8125 12.9278 18.8125 13.2989C18.8125 13.7383 18.6074 14.1192 18.1777 14.4414C17.9434 14.627 17.8457 14.8711 17.9824 15.1641C18.2266 15.6036 18.3438 15.8086 18.3438 16.1504C18.3438 16.6485 18.0215 17.0293 17.3379 17.3809C17.1231 17.5079 17.0742 17.6836 17.1621 17.8887C17.3965 18.4746 17.4258 18.5625 17.4258 18.8067C17.4258 19.2559 17.0938 19.6172 16.4102 19.793C15.8535 19.9297 14.9649 19.9883 13.9004 19.9883H12.6895C8.66602 19.9883 5.99024 17.7032 5.99024 14.5293ZM1.9375 14.5782C1.9375 12.1465 3.2461 10.1738 4.69141 10.1738C4.97461 10.1738 5.25781 10.1738 5.54102 10.1738C4.84766 11.4825 4.54492 12.8496 4.54492 14.5C4.54492 16.2481 5.16992 17.7715 6.29297 18.9336C5.87305 18.9336 5.46289 18.9336 5.04297 18.9336C3.39258 18.9336 1.9375 16.9414 1.9375 14.5782Z" />
    </svg>
  );
}

// Special Icon, used for RSVP
export function HandThumbsDown({ color = defaultColor }) {
  return (
    <svg
      className="cursor-pointer fill-stone-300 hover:fill-red-500"
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="22"
      viewBox="0 0 21 22"
    >
      <path d="M20.6387 7.04883C20.6387 3.88477 18.5781 1.23828 16.0879 1.23828H12.9727C11.7324 0.583984 10.2285 0.193359 8.54882 0.193359H7.24023C6.06836 0.193359 5.05273 0.261719 4.3789 0.4375C3.07031 0.75 2.25 1.66797 2.25 2.82031C2.25 3.05469 2.28906 3.2793 2.34765 3.48438C1.70312 3.98242 1.3418 4.68555 1.3418 5.47656C1.3418 5.85742 1.41016 6.22852 1.55664 6.54102C1.11719 6.99024 0.863282 7.64453 0.863282 8.32813C0.863282 8.76758 0.980469 9.23633 1.16602 9.57813C0.902344 9.95898 0.746094 10.4961 0.746094 11.0528C0.746094 12.4688 1.84961 13.5821 3.25586 13.5821H6.82031C7.03515 13.5821 7.17187 13.6797 7.17187 13.8653C7.17187 14.8809 5.57031 17.2637 5.57031 19.1778C5.57031 20.4961 6.48828 21.4336 7.74804 21.4336C8.67578 21.4336 9.30078 20.9551 9.90625 19.7832C11.0586 17.5762 12.4258 15.6133 14.6523 12.8985H16.4395C18.7637 12.8985 20.6387 10.2715 20.6387 7.04883ZM15.1406 7.09766C15.1406 9.13867 14.6816 10.4375 13.4121 12.1465C11.9961 14.0313 10.0234 16.3067 8.61718 19.1192C8.25586 19.8223 8.03125 19.9883 7.68945 19.9883C7.28906 19.9883 7.01562 19.7051 7.01562 19.1778C7.01562 17.6446 8.61718 15.3399 8.61718 13.8653C8.61718 12.7911 7.73828 12.1368 6.61523 12.1368H3.25586C2.65039 12.1368 2.1914 11.6778 2.1914 11.0528C2.1914 10.6036 2.32812 10.3204 2.69921 9.95898C2.875 9.80274 2.89453 9.59766 2.74804 9.42188C2.44531 8.97266 2.30859 8.69922 2.30859 8.32813C2.30859 7.87891 2.52343 7.50781 2.95312 7.17578C3.1875 7 3.28515 6.75586 3.13867 6.46289C2.90429 6.02344 2.78711 5.81836 2.78711 5.47656C2.78711 4.97852 3.10937 4.58789 3.79297 4.23633C4.00781 4.11914 4.05664 3.94336 3.95898 3.72852C3.73437 3.15234 3.70507 3.06445 3.70507 2.82031C3.70507 2.37109 4.02734 2.00977 4.71093 1.83398C5.26757 1.6875 6.15625 1.62891 7.23047 1.62891H8.4414C12.4649 1.63867 15.1406 3.92383 15.1406 7.09766ZM19.1934 7.04883C19.1934 9.4707 17.8848 11.4532 16.4395 11.4532C16.1563 11.4532 15.8731 11.4532 15.5899 11.4532C16.2832 10.1348 16.5859 8.76758 16.5859 7.12695C16.5859 5.37891 15.9609 3.85547 14.8379 2.69336C15.2481 2.69336 15.668 2.69336 16.0879 2.69336C17.7383 2.69336 19.1934 4.67578 19.1934 7.04883Z" />
    </svg>
  );
}

export function CalendarAddOn({ color = defaultColor }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={color}
    >
      <path
        d="M17 22V19H14V17H17V14H19V17H22V19H19V22H17ZM5 20C4.45 20 3.97917 19.8042 3.5875 19.4125C3.19583 19.0208 3 18.55 3 18V6C3 5.45 3.19583 4.97917 3.5875 4.5875C3.97917 4.19583 4.45 4 5 4H6V2H8V4H14V2H16V4H17C17.55 4 18.0208 4.19583 18.4125 4.5875C18.8042 4.97917 19 5.45 19 6V12.1C18.6667 12.05 18.3333 12.025 18 12.025C17.6667 12.025 17.3333 12.05 17 12.1V10H5V18H12C12 18.3333 12.025 18.6667 12.075 19C12.125 19.3333 12.2167 19.6667 12.35 20H5Z"
        fill={color}
      />
    </svg>
  );
}

export function Schedule({ color = defaultColor }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={color}
    >
      <path
        d="M15.3 16.7L16.7 15.3L13 11.6V7H11V12.4L15.3 16.7ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22Z"
        fill={color}
      />
    </svg>
  );
}

export function Distance({ color = defaultColor }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={color}
    >
      <path
        d="M12 22C10.2333 22 8.79167 21.7208 7.675 21.1625C6.55833 20.6042 6 19.8833 6 19C6 18.4167 6.24167 17.9083 6.725 17.475C7.20833 17.0417 7.875 16.7 8.725 16.45L9.3 18.35C9.01667 18.4333 8.75833 18.5375 8.525 18.6625C8.29167 18.7875 8.13333 18.9 8.05 19C8.26667 19.2667 8.76667 19.5 9.55 19.7C10.3333 19.9 11.15 20 12 20C12.85 20 13.6708 19.9 14.4625 19.7C15.2542 19.5 15.7583 19.2667 15.975 19C15.8917 18.9 15.7333 18.7875 15.5 18.6625C15.2667 18.5375 15.0083 18.4333 14.725 18.35L15.3 16.45C16.15 16.7 16.8125 17.0417 17.2875 17.475C17.7625 17.9083 18 18.4167 18 19C18 19.8833 17.4417 20.6042 16.325 21.1625C15.2083 21.7208 13.7667 22 12 22ZM12 19C11.8167 19 11.65 18.9458 11.5 18.8375C11.35 18.7292 11.2417 18.5833 11.175 18.4C10.7917 17.2167 10.3083 16.225 9.725 15.425C9.14167 14.625 8.575 13.8583 8.025 13.125C7.49167 12.3917 7.02917 11.6333 6.6375 10.85C6.24583 10.0667 6.05 9.1 6.05 7.95C6.05 6.28333 6.625 4.875 7.775 3.725C8.925 2.575 10.3333 2 12 2C13.6667 2 15.075 2.575 16.225 3.725C17.375 4.875 17.95 6.28333 17.95 7.95C17.95 9.1 17.7583 10.0667 17.375 10.85C16.9917 11.6333 16.525 12.3917 15.975 13.125C15.4417 13.8583 14.8792 14.625 14.2875 15.425C13.6958 16.225 13.2083 17.2167 12.825 18.4C12.7583 18.5833 12.65 18.7292 12.5 18.8375C12.35 18.9458 12.1833 19 12 19ZM12 10.075C12.5833 10.075 13.0833 9.86667 13.5 9.45C13.9167 9.03333 14.125 8.53333 14.125 7.95C14.125 7.36667 13.9167 6.86667 13.5 6.45C13.0833 6.03333 12.5833 5.825 12 5.825C11.4167 5.825 10.9167 6.03333 10.5 6.45C10.0833 6.86667 9.875 7.36667 9.875 7.95C9.875 8.53333 10.0833 9.03333 10.5 9.45C10.9167 9.86667 11.4167 10.075 12 10.075Z"
        fill={color}
      />
    </svg>
  );
}

export function PersonApple({ color = defaultColor }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill={color}
    >
      <path
        d="M2.37992 17.9903H14.5904C16.2028 17.9903 16.9702 17.5045 16.9702 16.4361C16.9702 13.891 13.755 10.2094 8.48999 10.2094C3.21532 10.2094 0 13.891 0 16.4361C0 17.5045 0.767403 17.9903 2.37992 17.9903ZM1.92337 16.5235C1.6708 16.5235 1.56394 16.4555 1.56394 16.2514C1.56394 14.6486 4.03129 11.6762 8.48999 11.6762C12.9389 11.6762 15.4063 14.6486 15.4063 16.2514C15.4063 16.4555 15.3092 16.5235 15.0567 16.5235H1.92337ZM8.48999 8.99513C10.8019 8.99513 12.6864 6.94548 12.6864 4.43927C12.6864 1.9525 10.8116 0 8.48999 0C6.18778 0 4.29356 1.99136 4.29356 4.45871C4.29356 6.95519 6.17807 8.99513 8.48999 8.99513ZM8.48999 7.52832C7.07176 7.52832 5.85752 6.17807 5.85752 4.45871C5.85752 2.76847 7.05234 1.46681 8.48999 1.46681C9.93738 1.46681 11.1225 2.73933 11.1225 4.43927C11.1225 6.15864 9.91794 7.52832 8.48999 7.52832Z"
        fill={color}
      />
    </svg>
  );
}

export function SettingsGear({ color = defaultColor }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={color}
    >
      <path
        d="M9.24995 22L8.84995 18.8C8.63328 18.7167 8.42912 18.6167 8.23745 18.5C8.04578 18.3833 7.85828 18.2583 7.67495 18.125L4.69995 19.375L1.94995 14.625L4.52495 12.675C4.50828 12.5583 4.49995 12.4458 4.49995 12.3375V11.6625C4.49995 11.5542 4.50828 11.4417 4.52495 11.325L1.94995 9.375L4.69995 4.625L7.67495 5.875C7.85828 5.74167 8.04995 5.61667 8.24995 5.5C8.44995 5.38333 8.64995 5.28333 8.84995 5.2L9.24995 2H14.75L15.15 5.2C15.3666 5.28333 15.5708 5.38333 15.7625 5.5C15.9541 5.61667 16.1416 5.74167 16.325 5.875L19.3 4.625L22.05 9.375L19.475 11.325C19.4916 11.4417 19.5 11.5542 19.5 11.6625V12.3375C19.5 12.4458 19.4833 12.5583 19.45 12.675L22.025 14.625L19.275 19.375L16.325 18.125C16.1416 18.2583 15.95 18.3833 15.75 18.5C15.55 18.6167 15.35 18.7167 15.15 18.8L14.75 22H9.24995ZM11 20H12.975L13.325 17.35C13.8416 17.2167 14.3208 17.0208 14.7625 16.7625C15.2041 16.5042 15.6083 16.1917 15.975 15.825L18.45 16.85L19.425 15.15L17.275 13.525C17.3583 13.2917 17.4166 13.0458 17.45 12.7875C17.4833 12.5292 17.5 12.2667 17.5 12C17.5 11.7333 17.4833 11.4708 17.45 11.2125C17.4166 10.9542 17.3583 10.7083 17.275 10.475L19.425 8.85L18.45 7.15L15.975 8.2C15.6083 7.81667 15.2041 7.49583 14.7625 7.2375C14.3208 6.97917 13.8416 6.78333 13.325 6.65L13 4H11.025L10.675 6.65C10.1583 6.78333 9.67912 6.97917 9.23745 7.2375C8.79578 7.49583 8.39162 7.80833 8.02495 8.175L5.54995 7.15L4.57495 8.85L6.72495 10.45C6.64162 10.7 6.58328 10.95 6.54995 11.2C6.51662 11.45 6.49995 11.7167 6.49995 12C6.49995 12.2667 6.51662 12.525 6.54995 12.775C6.58328 13.025 6.64162 13.275 6.72495 13.525L4.57495 15.15L5.54995 16.85L8.02495 15.8C8.39162 16.1833 8.79578 16.5042 9.23745 16.7625C9.67912 17.0208 10.1583 17.2167 10.675 17.35L11 20ZM12.05 15.5C13.0166 15.5 13.8416 15.1583 14.525 14.475C15.2083 13.7917 15.55 12.9667 15.55 12C15.55 11.0333 15.2083 10.2083 14.525 9.525C13.8416 8.84167 13.0166 8.5 12.05 8.5C11.0666 8.5 10.2375 8.84167 9.56245 9.525C8.88745 10.2083 8.54995 11.0333 8.54995 12C8.54995 12.9667 8.88745 13.7917 9.56245 14.475C10.2375 15.1583 11.0666 15.5 12.05 15.5Z"
        fill={color}
      />
    </svg>
  );
}

export function PaintBrush({ color = defaultColor }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="18"
      viewBox="0 0 21 18"
      fill={color}
    >
      <path
        d="M0.968693 15.9058C2.58947 18.093 5.98787 18.6855 8.09663 17.1171C9.9004 15.7838 10.2838 13.6837 8.95058 11.9235C7.7045 10.2505 5.85717 9.84096 4.41066 10.9302C3.0513 11.9498 3.53057 13.4137 2.77246 13.9801C2.11021 14.4767 1.49152 14.1979 1.01226 14.5639C0.663708 14.8427 0.550428 15.3481 0.968693 15.9058ZM2.74632 15.7663C2.63304 15.6444 2.64175 15.5224 2.72018 15.444C2.84217 15.3307 3.33015 15.2959 3.70484 14.9211C4.55009 14.0846 4.26253 12.856 5.23848 12.0979C6.04887 11.453 7.17295 11.6883 7.93106 12.6643C8.78502 13.7709 8.48875 15.1215 7.31237 16.0278C5.99659 17.0647 3.96625 17.056 2.74632 15.7663ZM9.49084 13.8319C10.4319 13.7273 11.2249 13.2567 12.1137 12.368C14.9108 9.57954 19.1807 3.33171 19.5553 2.80888C20.6533 1.28396 18.7711 -0.580808 17.2375 0.490997C16.7233 0.856978 10.4668 5.11805 7.67836 7.93263C6.80698 8.81272 6.32771 9.59698 6.21443 10.5206L7.58251 10.8953C7.59994 10.2592 7.93977 9.64054 8.66302 8.926C11.4253 6.19857 17.5337 2.00721 17.9084 1.72836C18.2047 1.51052 18.5358 1.82422 18.3092 2.14663C18.0827 2.47775 13.839 8.66459 11.1203 11.3833C10.4058 12.0979 9.85682 12.3854 9.25556 12.4551L9.49084 13.8319ZM11.0332 11.6447L12.1486 11.3572C12.0266 9.69282 10.3971 8.03719 8.75888 7.89777L8.38418 9.01315C9.49955 8.987 11.0332 10.5206 11.0332 11.6447Z"
        fill={color}
      />
    </svg>
  );
}
