import Presenter from "./Presenter";
import { compose } from "recompose";

const Grid = compose(Presenter);
Grid.displayName = "Grid";

export default Grid;
