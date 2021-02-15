/*
Tournament winner

There's an algorithms tournament taking place in which teams of programmers
compete against each other to solve algorithmic problems as fast as possible.
Teams compete in a round robin, where each team faces off against all other
teams. Only two teams compete against each other at a time, and for each
competition, one team is designated the home team, while the other team is the
away team. In each competition there's always one winner and one loser; there
are no ties. A team receives 3 points if it wins and 0 points if it loses. The
winner of the tournament is the team that receives the most amount of points.

Given an array of pairs representing the teams that have competed against each other and an array containing the results of each competition, write a function that returns
the winner of the tournament. The input arrays are named `competitions` and `results`, respectively. The `competitions` array has elements in the form of `[homeTeam, awayTeam]`, where
each team is a string of at most 30 characters representing the name of the team. The `results` array contains information about the winner of each corresponding competition in the competitions
array. Specifically, `results[i]` denotes the winner of `competitions[i]`, where `1` in the `results` array means that the home team in the corresponding competition won and `0` means
that the away team won.

```
competitions:

[["HTML", "C#"], ["C#", "Python"], ["Python", "HTML"]]


results:
[0, 0, 1]


TIME COMPLEXITY O(N) time | O(K) space where N is the number of competitions and k is the number of teams.

*/

/**
 * HINT : Use a hash table to store the total points collected by each team, with the
  team names as keys in the hash table. Once you know how many points each team
  has, how can you determine which one is the winner?


  HINT:   Loop through all of the competitions, and update the hash table at every
  iteration. For each competition, consider the name of the winning team; if the
  name already exists in the hash table, update that entry by adding 3 points to
  it. If the team name doesn't exist in the hash table, add a new entry in the
  hash table with the key as the team name and the value as 3 (since the team
  won its first competition). While looping through all of the competitions,
  keep track of the team with the highest score, and at the end of the
  algorithm, return the team with the highest score.
 */

const tournamentWinner = require('./tournament-winner');

it('Test #1', () => {
  expect(
    tournamentWinner(
      [
        ['HTML', 'C#'],
        ['C#', 'Python'],
        ['Python', 'HTML'],
      ],
      [0, 0, 1]
    )
    // C# beats HTML, Python beats C#, and Python beats HTML
    // HTML - 0 points
    // C# - 3 points
    // Python - 6 points
  ).toBe('Python');
});

it('Test #2', () => {
  expect(
    tournamentWinner(
      [
        ['HTML', 'Java'],
        ['Java', 'Python'],
        ['Python', 'HTML'],
        ['C#', 'Python'],
        ['Java', 'C#'],
        ['C#', 'HTML'],
      ],

      [0, 1, 1, 1, 0, 1]
    )
  ).toBe('C#');
});

it('Test #3', () => {
  expect(tournamentWinner([['Bulls', 'Eagles']], [1])).toBe('Bulls');
});

it('Test #4', () => {
  expect(
    tournamentWinner(
      [
        ['HTML', 'Java'],
        ['Java', 'Python'],
        ['Python', 'HTML'],
      ],
      [0, 1, 1]
    )
    // Java beats HTML, Java beats Python, and Python beats HTML
    // HTML - 0 points
    // Python - 3 points
    // Java - 6 poins
  ).toBe('Java');
});

it('Test #5', () => {
  expect(
    tournamentWinner(
      [
        ['Bulls', 'Eagles'],
        ['Bulls', 'Bears'],
        ['Bears', 'Eagles'],
      ],

      [0, 0, 0]
    )
  ).toBe('Eagles');
});

it('Test #6', () => {
  expect(
    tournamentWinner(
      [
        ['Bulls', 'Eagles'],
        ['Bulls', 'Bears'],
        ['Bulls', 'Monkeys'],
        ['Eagles', 'Bears'],
        ['Eagles', 'Monkeys'],
        ['Bears', 'Monkeys'],
      ],

      [1, 1, 1, 1, 1, 1]
    )
  ).toBe('Bulls');
});
it('Test #7', () => {
  expect(
    tournamentWinner(
      [
        ['AlgoMasters', 'FrontPage Freebirds'],
        ['Runtime Terror', 'Static Startup'],
        ['WeC#', 'Hypertext Assassins'],
        ['AlgoMasters', 'WeC#'],
        ['Static Startup', 'Hypertext Assassins'],
        ['Runtime Terror', 'FrontPage Freebirds'],
        ['AlgoMasters', 'Runtime Terror'],
        ['Hypertext Assassins', 'FrontPage Freebirds'],
        ['Static Startup', 'WeC#'],
        ['AlgoMasters', 'Static Startup'],
        ['FrontPage Freebirds', 'WeC#'],
        ['Hypertext Assassins', 'Runtime Terror'],
        ['AlgoMasters', 'Hypertext Assassins'],
        ['WeC#', 'Runtime Terror'],
        ['FrontPage Freebirds', 'Static Startup'],
      ],

      [1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0]
    )
  ).toBe('AlgoMasters');
});
it('Test #8', () => {
  expect(
    tournamentWinner(
      [['A', 'B']],

      [0]
    )
  ).toBe('B');
});
