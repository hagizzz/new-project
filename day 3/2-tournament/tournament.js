
let tournaments = []

export function getTournaments() {
    return tournaments
}

export function getTournamentById(tournamentId) {
    return tournaments.find(tournament => {
        return tournament.id === tournamentId
    })
}

export function addTournament(tournament) {
    tournaments.push({
        id: tournaments.length + 1,
        name: tournament.name,
        users: [],
        winner: null,
    })
}

export function deleteUserInTournament(tournamentId, userId) {
    const tournamentIndex = tournaments.findIndex(tournament => {
        return tournament.id === tournamentId
    })
    tournaments[tournamentIndex].users = tournaments[tournamentIndex].users.filter(user => {
        return user.id !== userId
    })
}


export function addUserToTournament(tournamentId, user) {
    const tournamentIndex = tournaments.findIndex(tournament => {
        return tournament.id === tournamentId
    })
    tournaments[tournamentIndex].users.push(user)
}

export function findFinalize(tournamentId) {
    const tournamentIndex = tournaments.findIndex(tournament => {
        return tournament.id === tournamentId
    })
    const randomIndex = Math.floor(Math.random()*tournaments[tournamentIndex].users.length)
    const randomWinner = tournaments[tournamentIndex].users[randomIndex]

    tournaments[tournamentIndex].winner = randomWinner

    return randomWinner
} 

