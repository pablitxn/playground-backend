import {
	IAddUser,
	IRemoveUser,
	IGetUser,
	IGetUsersInRoom
} from '../../interfaces/coffee-chat/utils'

const users = []

const addUser: IAddUser = ({ id, name, room }) => {
	name = name.trim().toLowerCase()
	room = room.trim().toLowerCase()

	const existingUser = users.find((user) => user.room === room && user.name === name)

	if (!name || !room) return { error: 'Username and room are required.' }
	if (existingUser) return { error: 'Username is taken.' }

	const user = { id, name, room }

	users.push(user)

	return { user }
}

const removeUser: IRemoveUser = (id) => {
	const index = users.findIndex((user) => user.id === id)
	if (index !== -1) return users.splice(index, 1)[0]
}

const getUser: IGetUser = (id) => users.find((user) => user.id === id)

const getUsersInRoom: IGetUsersInRoom = (room) =>
	users.filter((user) => user.room === room)

export { addUser, removeUser, getUser, getUsersInRoom }
