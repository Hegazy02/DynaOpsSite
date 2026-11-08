import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

import type { FeatureConnectionsContent } from './feature-connections.model';

// Connector curves from the Figma exports (688x110 box), hub centre to each evenly spaced column.
const CONNECTOR_PATHS: Record<number, string[]> = {
  4: [
    'M344.05 1.288C344.05 54.788 76.7 54.788 76.7 108.288',
    'M342.84 1.288C342.84 54.788 254 54.788 254 108.288',
    'M343.16 1.288C343.16 54.788 432 54.788 432 108.288',
    'M343.15 1.288C343.15 54.788 610.5 54.788 610.5 108.288',
  ],
  5: [
    'M344.059 1.288C344.059 54.888 61.078 54.888 61.078 108.488',
    'M343.105 1.288C343.105 54.888 201.194 54.888 201.194 108.488',
    'M344 1.288C344 54.888 344 54.888 344 108.488',
    'M343.105 1.288C343.105 54.888 485.017 54.888 485.017 108.488',
    'M343.102 1.288C343.102 54.888 626.082 54.888 626.082 108.488',
  ],
};

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

  protected readonly connectorPaths = computed(() => CONNECTOR_PATHS[this.content().items.length]);
}
