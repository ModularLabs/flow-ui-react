import Presenter from "./Presenter";
import { compose } from "recompose";

const Cell = compose(Presenter);
Cell.displayname = "Cell";

export default Cell;
