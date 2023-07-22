import express  from "express"
import bodyParser from 'body-parser'
import cors from 'cors'
import { addUser, deleteUserById, getUserById, getUsers, updateUserById } from "./users.js"
import { addTournament, addUserToTournament, getTournaments, getTournamentById, deleteUserInTournament, findFinalize } from "./tournament.js"

const server = express() 
const PORT = 3000

server.use(bodyParser.json())
server.use(cors())

server.get('/', (req, res) => {
    res.send('Welcome to tournament')
})

server.get('/users', (req, res) => {
    res.send(getUsers())
})

server.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id)
    res.send(getUserById(userId))
})

server.get('/tournaments', (req, res) => {
    res.send(getTournaments())
})

server.post('/users', (req, res) => {
    const user = req.body
    if(user.username && user.displayName && user.age) {
        addUser(user)
        res.send('User added')
    }
    else res.status(404)
})

server.post('/tournaments', (req, res) => {
    const tournament = req.body
    if(tournament.name) {
        addTournament(tournament)
        res.send('Tournament added')
    }
    else res.status(404)
})

server.post('/tournaments/:tournamentId/users/:userId', (req, res) => {
    const userId = parseInt(req.params.userId)
    const tournamentId = parseInt(req.params.tournamentId)

    const user = getUserById(userId)
    const tournament = getTournamentById(tournamentId)
    if(user && tournament) {
        addUserToTournament(tournamentId, user)
        res.send('User added')
    }
    else res.status(404)
})

server.post('/tournaments/:tournamentId/finalize', (req, res) => {
    const tournamentId = parseInt(req.params.tournamentId)
    const tournament = getTournamentById(tournamentId)

    if(tournament) {
        if (!tournament.winner) res.send(findFinalize(tournamentId))
        else res.send('Tournament is closed')
    } else res.status(404)
})

server.delete('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id)
    res.send(deleteUserById(userId))
})

server.delete('/tournaments/:tournamentId/users/:userId', (req, res) => {
    const userId = parseInt(req.params.userId)
    const tournamentId = parseInt(req.params.tournamentId)

    const user = getUserById(userId)
    const tournament = getTournamentById(tournamentId)
    if(user && tournament) {
        deleteUserInTournament(tournamentId, userId)
        res.send('User deleted')
    }
    else res.status(404)
})

server.put('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id)
    updateUserById(userId, req.body)
    res.send('User updated')
})

server.listen(PORT, () => {
    console.log('Server is running')
})