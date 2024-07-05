import { BsThreeDotsVertical } from "react-icons/bs";
import * as React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";
import clsx from "clsx";

const items = [
  {
    id: "ugvyvbb35763uv87432",
    name: "demo-File 1",
    content:
      "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
    category: false,
    favrouite: true,
  },
  {
    id: "ugv098bbuv87432",
    name: "demo-File 2",
    content:
      "Lorem ipsum dolor sit amet. Lorem ipsum dpsum dolor sit amet. Lorem ipspsum dolor sit amet. Lorem ipsolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
    category: false,
    favrouite: true,
  },
  {
    id: "ugvy368547432",
    name: "demo-File 3",
    content:
      "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.Lopsum dolor sit amet. Lorem ipspsum dolor sit amet. Lorem ipspsum dolor sit amet. Lorem ipspsum dolor sit amet. Lorem ipspsum dolor sit amet. Lorem ipspsum dolor sit amet. Lorem ipspsum dolor sit amet. Lorem ipspsum dolor sit amet. Lorem ipspsum dolor sit amet. Lorem ipspsum dolor sit amet. Lorem ipspsum dolor sit amet. Lorem ipsm ipsum dolor sit amet.",
    category: false,
    favrouite: true,
  },
  {
    id: "ugv75j95g7buv87432",
    name: "demo-File 4",
    content:
      "Lorem ipsum dolor sit amet. Lorem ipsdolor sit amet. Lorem ipsumdolor sit amet. Lorem ipsumdolor sit amet. Lorem ipsumdolor sit amet. Lorem ipsumdolor sit amet. Lorem ipsumdolor sit amet. Lorem ipsumdolor sit amet. Lorem ipsumdolor sit amet. Lorem ipsumdolor sit amet. Lorem ipsumdolor sit amet. Lorem ipsumum dolor sit amet. Lorem ipsum dolor sit ipsum dolor sit amet.",
    category: false,
    favrouite: true,
  },
  {
    id: "ugvy76bu75v87432",
    name: "demo-File 5",
    content:
      "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsumpsum dolor sit amet. Lorem ipspsum dolor sit amet. Lorem ips dolor sit amet.",
    category: false,
    favrouite: true,
  },
  {
    id: "u743gv56bb657uv87432",
    name: "demo-File 6",
    content:
      "Lorem ipsum dolor sit amet. Lorem ipspsum dolor sit amet. Lorem ipspsum dolor sit amet. Lorem ipspsum dolor sit amet. Lorem ipspsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
    category: false,
    favrouite: true,
  },
  {
    id: "ug13132vyvbb35763uv87432",
    name: "demo-File 1",
    content:
      "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
    category: false,
    favrouite: true,
  },
  {
    id: "ug123v098bbuv87432",
    name: "demo-File 2",
    content:
      "Lorem ipsum dolor sit amet. Lorem ipsum dpsum dolor sit amet. Lorem ipspsum dolor sit amet. Lorem ipsolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
    category: false,
    favrouite: true,
  },
  {
    id: "u1g12vy368547432",
    name: "demo-File 3",
    content:
      "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.Lopsum dolor sit amet. Lorem ipspsum dolor sit amet. Lorem ipspsum dolor sit amet. Lorem ipspsum dolor sit amet. Lorem ipspsum dolor sit amet. Lorem ipspsum dolor sit amet. Lorem ipspsum dolor sit amet. Lorem ipspsum dolor sit amet. Lorem ipspsum dolor sit amet. Lorem ipspsum dolor sit amet. Lorem ipspsum dolor sit amet. Lorem ipsm ipsum dolor sit amet.",
    category: false,
    favrouite: true,
  },
  {
    id: "ug12v175j95g7buv87432",
    name: "demo-File 4",
    content:
      "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit ipsum dolor sit amet.",
    category: false,
    favrouite: true,
  },
  {
    id: "u12gvy76bu75v87432",
    name: "demo-File 5",
    content:
      "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsumpsum dolor sit amet. Lorem ipspsum dolor sit amet. Lorem ips dolor sit amet.",
    category: false,
    favrouite: true,
  },
  {
    id: "u32gv562157uv87432",
    name: "demo-File 6",
    content:
      "Lorem ipsum dolor sit amet. Lorem ipspsum dolor sit amet. Lorem ipspsum dolor sit amet. Lorem ipspsum dolor sit amet. Lorem ipspsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
    category: false,
    favrouite: true,
  },
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  color: theme.palette.text.secondary,
  "&.bg": {
    backgroundColor: "#fafafa",
  },
  "&.text-white": {
    color: "#000",
  },
  "&.p-0": {
    padding: "0rem",
  },
  "&.rounded-lg": {
    borderRadius: "0.5rem",
  },
  minWidth: 100,
}));

function Folder() {
  const mainBoxRef = React.useRef(null);
  const [columns, setColumns] = React.useState(4); // Default columns
  const [itemMaxWidth, setItemMaxWidth] = React.useState(0);

  React.useEffect(() => {
    function handleResize() {
      if (mainBoxRef.current) {
        const width = mainBoxRef.current.clientWidth;
        // Calculate columns based on container width
        if (width < 600) {
          setColumns(1);
        } else if (width < 960) {
          setColumns(2);
        } else if (width < 1280) {
          setColumns(3);
        } else if (width < 1880) {
          setColumns(4);
        } else {
          setColumns(5);
        }
        const gutter = 2;
        const calculatedMaxWidth = width / columns - gutter;
        setItemMaxWidth(calculatedMaxWidth);
      }
    }

    // Initial setup
    handleResize();

    // Event listener for window resize
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [columns]);

  return (
    <div ref={mainBoxRef} className="main-box">
      <Box sx={{ width: "100%", minHeight: "100vh", padding: 2 }}>
        <Masonry columns={columns} spacing={2}>
          {items.map((item) => {
            const maxLength = 200;
            let newContent = item.content.slice(0, maxLength);

            if (item.content.length > maxLength) {
              newContent += "...";
            }
            return (
              <Item
                className={clsx("bg", "text-white", "p-0", "rounded-lg")}
                key={item.id}
                sx={{ maxWidth: itemMaxWidth }}
              >
                <div className="cursor-pointer p-3 flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <p className="text-base font-semibold">{item.name}</p>
                    <button className="hover:bg-[#222] py-1 rounded-full w-6 h-6 flex items-center justify-center">
                      <BsThreeDotsVertical />
                    </button>
                  </div>
                  <div>
                    <p>{newContent}</p>
                  </div>
                </div>
              </Item>
            );
          })}
        </Masonry>
      </Box>
    </div>
  );
}

export default Folder;
