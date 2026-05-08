import { Button } from "@mui/material";

export default function MaterialTest() {
  const handleCick = () => {
    alert("버튼 클릭");
  };

  return (
    <div>
      <Button variant="text">Text</Button>
      <Button variant="contained" onClick={handleCick}>
        Contained
      </Button>
      <Button variant="outlined">Outlined</Button>
    </div>
  );
}
