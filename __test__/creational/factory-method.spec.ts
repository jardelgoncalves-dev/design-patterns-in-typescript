import { Creator } from '../../src/creational/factory_method';

describe('Creational/Factory Method Test', () => {
  it('should create an football tournaments', () => {
    const football = Creator.createFootbalTournament('UEFA Champions League');

    expect(football).toBeDefined();
    expect(football.name).toBe('UEFA Champions League');
    expect(football.numberTeams).toBe(79);
  });

  it('should return null if football tournament does not exist', () => {
    const football = Creator.createFootbalTournament('Liga BBC');

    expect(football).toBeNull();
  });
});
