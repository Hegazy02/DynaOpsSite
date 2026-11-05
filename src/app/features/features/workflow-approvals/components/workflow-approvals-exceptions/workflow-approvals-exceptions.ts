import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import type {
  WorkflowExceptionsContent,
  WorkflowExceptionsDiagram,
} from './workflow-approvals-exceptions.model';

// Flow paths from the Figma frames, in each artwork's own coordinates.
// Only the Arabic desktop frame is mirrored; the tablet and phone frames keep their paths in both languages.
const DIAGRAMS: WorkflowExceptionsDiagram[] = [
  {
    breakpoint: 'desktop',
    visibilityClass: 'hidden max-w-300 xl:block',
    overlayClass: 'rtl:-scale-x-100',
    width: 1200,
    height: 400,
    incoming: 'M312 200H428',
    approval: 'M628 200C738 200 728 90 840 90',
    autoProcessed: 'M628 200C738 200 728 310 840 310',
    holes: [
      { x: 672, y: 120, width: 110, height: 23.3 },
      { x: 670, y: 256, width: 101, height: 23.3 },
    ],
  },
  {
    breakpoint: 'tablet',
    visibilityClass: 'hidden max-w-172 md:block xl:hidden',
    overlayClass: '',
    width: 688,
    height: 657,
    incoming: 'M344 219V259',
    approval: 'M344 418C344 468 178 456 178 506',
    autoProcessed: 'M344 418C344 468 510 456 510 506',
    holes: [
      { x: 160, y: 452, width: 117, height: 23.3 },
      { x: 430.5, y: 452, width: 121, height: 23.3 },
    ],
  },
  {
    breakpoint: 'phone',
    visibilityClass: 'max-w-89.5 md:hidden',
    overlayClass: '',
    width: 358,
    height: 779,
    incoming: 'M178.5 227V259',
    approval: 'M103 471V493',
    autoProcessed: 'M317 463H331C336.3 463 339 465.7 339 471V678C339 683.3 336.3 686 331 686H330',
    holes: [],
  },
];

// "Control exceptions" section: transactions flow through the rules into approval or auto-processing.
// The cards are localized artwork; the flows are inline SVG so a pulse can run along each path (Figma path trim, 6s loop).
@Component({
  selector: 'app-workflow-approvals-exceptions',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './workflow-approvals-exceptions.html',
  styleUrl: './workflow-approvals-exceptions.css',
  host: { class: 'block bg-linear-to-t/srgb from-brand-500/20 to-transparent' },
})
export class WorkflowApprovalsExceptions {
  readonly content = input.required<WorkflowExceptionsContent>();

  protected readonly diagrams = DIAGRAMS;
}
