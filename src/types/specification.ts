export interface ColorPalette {
  name: string;
  hex: string;
  opacity: number;
  usage?: string;
}

export interface GridSystem {
  columns: number;
  gutter_px: number;
  margin_px: number;
}

export interface GlobalStyles {
  base_font_family: string;
  base_font_size_px: number;
  color_palette: ColorPalette[];
  grid: GridSystem;
}

export interface LayoutConfig {
  display: string;
  position?: string;
  alignItems?: string;
  justifyContent?: string;
  flexDirection?: string;
  gap_px?: number;
  padding?: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };
  z_index?: number;
}

export interface ElementPosition {
  x: number;
  y: number;
}

export interface ElementDimensions {
  width: number;
  height: number;
}

export interface ComputedCSS {
  [key: string]: string | number;
}

export interface PageElement {
  id: string;
  type: 'container' | 'image' | 'text' | 'link' | 'icon' | 'block';
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  layout?: LayoutConfig;
  children_order?: string[];
  computed_css?: ComputedCSS;
  raw_text?: string;
  rendered_text?: string;
  font_family_guess?: string;
  font_size_px?: number;
  line_height_px?: number;
  font_weight?: number;
  letter_spacing_px?: number;
  margin_top_px?: number;
  margin_bottom_px?: number;
  media_type?: string;
  alt_text?: string;
  suggested_filename?: string;
  render_code?: string;
  notes?: string;
  confidence: number;
}

export interface Asset {
  name: string;
  type: 'bitmap' | 'svg' | 'video';
  media_type: string;
  original_size_px: {
    w: number;
    h: number;
  };
  rendered_size_px: {
    w: number;
    h: number;
  };
  position: ElementPosition;
  alt_text: string;
  confidence: number;
}

export interface Viewport {
  width: number;
  height: number;
  device: 'desktop' | 'tablet' | 'mobile';
}

export interface Uncertainty {
  field: string;
  assumption: string;
  confidence: number;
  explanation: string;
}

export interface PageSpec {
  order: number;
  viewport: Viewport;
  canvas_size: {
    width_px: number;
    height_px: number;
  };
  global_styles: GlobalStyles;
  elements: PageElement[];
  assets: Asset[];
  html_snippet?: string;
  css_snippet?: string;
  uncertainties?: Uncertainty[];
}

export interface JSONSpecification {
  pages: PageSpec[];
  notes: string;
  implementation_priority?: string[];
  qa_checks?: string[];
}
