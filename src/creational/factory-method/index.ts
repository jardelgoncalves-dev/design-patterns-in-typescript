abstract class IFootballTournaments {
  name: string;
  numberTeams: number;
}

class FootballTournaments extends IFootballTournaments {
  constructor(name: string, numberTeams: number) {
    super();
    this.name = name;
    this.numberTeams = numberTeams;
  }
}

export class Creator {
  static createFootbalTournament(tournamentName: string): IFootballTournaments | null {
    const options = {
      'FIFA World Cup': () => new FootballTournaments(tournamentName, 48),
      'UEFA Champions League': () => new FootballTournaments(tournamentName, 79),
    };

    return options[tournamentName] ? options[tournamentName]() : null;
  }
}
