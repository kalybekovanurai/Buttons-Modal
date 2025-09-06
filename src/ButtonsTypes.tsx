import "./index.css";
import Button from "./components/UI/Button";

function ButtonTypes() {
  return (
    <div className="border rounded-lg m-2 p-4 w-220">
      <h2>Primary Buttons</h2>
      <Button btnType="basic">Default</Button>
      <Button btnType="basic" variant="small">
        Small
      </Button>
      <Button btnType="basic" variant="large">
        Large
      </Button>
      <Button btnType="basic" variant="disabled" disabled>
        Disabled
      </Button>
      <h2>Destructive Buttons</h2>
      <Button btnType="destructive">Default</Button>
      <Button btnType="destructive" variant="small">
        Small
      </Button>
      <Button btnType="destructive" variant="large">
        Large
      </Button>
      <Button btnType="destructive" variant="disabled" disabled>
        Disabled
      </Button>
    </div>
  );
}

export default ButtonTypes;
