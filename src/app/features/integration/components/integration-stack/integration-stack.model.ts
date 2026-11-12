// One tier of the stack, top to bottom: DynaOps SFA, the integration layer, Dynamics 365 F&O.
export interface IntegrationStackLabel {
  title: string;
  description: string;
}

// Same-viewBox layers of the 440x309 Figma artwork, stacked so each tier can move on its own.
export interface IntegrationStackImages {
  tileBottom: string;
  glowLower: string;
  tileMiddle: string;
  glowUpper: string;
  tileTop: string;
  // Dotted lead from a tier to its label, 28x20.
  connector: string;
}

export interface IntegrationStackContent {
  images: IntegrationStackImages;
  labels: IntegrationStackLabel[];
}
