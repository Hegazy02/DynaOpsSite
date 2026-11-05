export type WorkflowExceptionsBreakpoint = 'desktop' | 'tablet' | 'phone';

export interface WorkflowExceptionsContent {
  title: string;
  paragraphs: string[];
  // 2x exports per frame; the UI text is translated, so each language has its own files.
  images: Record<WorkflowExceptionsBreakpoint, string>;
  imageAlt: string;
}

export interface WorkflowExceptionsPathHole {
  x: number;
  y: number;
  width: number;
  height: number;
}

// One Figma frame of the diagram: its artwork size, flow paths and where the flows pass behind a pill.
export interface WorkflowExceptionsDiagram {
  breakpoint: WorkflowExceptionsBreakpoint;
  visibilityClass: string;
  overlayClass: string;
  width: number;
  height: number;
  incoming: string;
  approval: string;
  autoProcessed: string;
  holes: WorkflowExceptionsPathHole[];
}
