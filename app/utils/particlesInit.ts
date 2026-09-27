import type { Engine } from '@tsparticles/engine';

export async function registerParticles(engine: Engine): Promise<void> {
  const { loadSlim } = await import('@tsparticles/slim');

  await loadSlim(engine);
}
