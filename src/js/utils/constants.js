export const ALL_CHART_TYPES = [
  "line",
  "scatter",
  "bar",
  "percentage",
  "heatmap",
  "pie",
];

export const COMPATIBLE_CHARTS = {
  bar: ["line", "scatter", "percentage", "pie"],
  line: ["scatter", "bar", "percentage", "pie"],
  pie: ["line", "scatter", "percentage", "bar"],
  percentage: ["bar", "line", "scatter", "pie"],
  heatmap: [],
};

export const DATA_COLOR_DIVISIONS = {
  bar: "datasets",
  line: "datasets",
  pie: "labels",
  percentage: "labels",
  heatmap: HEATMAP_DISTRIBUTION_SIZE,
};

export const BASE_MEASURES = {
  margins: {
    top: 10,
    bottom: 10,
    left: 0, //20
    right: 0, //20
  },
  paddings: {
    top: 0, //20
    bottom: 0, //40
    left: 0, //30
    right: 0, //10
  },

  baseHeight: 240,
  titleHeight: 20,
  legendHeight: 30,

  titleFontSize: 12,
};

export function getTopOffset(m) {
  return m.titleHeight + m.margins.top + m.paddings.top;
}

export function getLeftOffset(m) {
  return m.margins.left + m.paddings.left;
}

export function getExtraHeight(m) {
  let totalExtraHeight =
    m.margins.top +
    m.margins.bottom +
    m.paddings.top +
    m.paddings.bottom +
    m.titleHeight +
    m.legendHeight;
  return totalExtraHeight;
}

export function getExtraWidth(m) {
  let totalExtraWidth =
    m.margins.left + m.margins.right + m.paddings.left + m.paddings.right;

  return totalExtraWidth;
}

export const INIT_CHART_UPDATE_TIMEOUT = 700;
export const CHART_POST_ANIMATE_TIMEOUT = 400;

export const DEFAULT_AXIS_CHART_TYPE = "line";
export const AXIS_DATASET_CHART_TYPES = ["line", "bar"];

export const LEGEND_ITEM_WIDTH = 120; // 150
export const SERIES_LABEL_SPACE_RATIO = 0.6;

export const BAR_CHART_SPACE_RATIO = 0.5;
export const MIN_BAR_PERCENT_HEIGHT = 0.0;

export const LINE_CHART_DOT_SIZE = 4;
export const DOT_OVERLAY_SIZE_INCR = 4;

export const PERCENTAGE_BAR_DEFAULT_HEIGHT = 16;

// Fixed 5-color theme,
// More colors are difficult to parse visually
export const HEATMAP_DISTRIBUTION_SIZE = 5;

export const HEATMAP_SQUARE_SIZE = 10;
export const HEATMAP_GUTTER_SIZE = 2;

export const DEFAULT_CHAR_WIDTH = 7;

export const TOOLTIP_POINTER_TRIANGLE_HEIGHT = 7.48;
const DEFAULT_CHART_COLORS = [
  "pink",
  "blue",
  "green",
  "grey",
  "red",
  "yellow",
  "purple",
  "teal",
  "cyan",
  "orange",
];
const HEATMAP_COLORS_GREEN = [
  "#ebedf0",
  "#c6e48b",
  "#7bc96f",
  "#239a3b",
  "#196127",
];
export const HEATMAP_COLORS_BLUE = [
  "#ebedf0",
  "#c0ddf9",
  "#73b3f3",
  "#3886e1",
  "#17459e",
];
export const HEATMAP_COLORS_YELLOW = [
  "#ebedf0",
  "#fdf436",
  "#ffc700",
  "#ff9100",
  "#06001c",
];

export const DEFAULT_COLORS = {
  bar: DEFAULT_CHART_COLORS,
  line: DEFAULT_CHART_COLORS,
  pie: DEFAULT_CHART_COLORS,
  percentage: DEFAULT_CHART_COLORS,
  heatmap: HEATMAP_COLORS_GREEN,
  donut: DEFAULT_CHART_COLORS,
};

// Universal constants
export const ANGLE_RATIO = Math.PI / 180;
export const FULL_ANGLE = 360;
