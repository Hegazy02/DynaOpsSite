import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import type { FeatureConnectionsContent } from './feature-connections.model';

// Connector curves from the Figma export (688x110 box), hub centre to each of the five columns.
const CONNECTOR_PATHS = [
  'M344.059 1.288C344.059 54.888 61.078 54.888 61.078 108.488',
  'M343.105 1.288C343.105 54.888 201.194 54.888 201.194 108.488',
  'M344 1.288C344 54.888 344 54.888 344 108.488',
  'M343.105 1.288C343.105 54.888 485.017 54.888 485.017 108.488',
  'M343.102 1.288C343.102 54.888 626.082 54.888 626.082 108.488',
];

// "Turn information into execution" section: a hub fanning out to the activities it feeds.
// From md the connectors are inline SVG so a pulse can run along each path (Figma path trim, 2s loop);
// phones get the vertical tree of the phone frame, drawn with borders.
@Component({
  selector: 'app-feature-connections',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './feature-connections.html',
  styleUrl: './feature-connections.css',
  host: { class: 'block bg-linear-to-t/srgb from-brand-500/20 to-transparent' },
})
export class FeatureConnections {
  readonly content = input.required<FeatureConnectionsContent>();

  protected readonly connectorPaths = CONNECTOR_PATHS;
}
