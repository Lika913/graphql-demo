const users = [{id: "1001", name: "petr"}]

const root = {
    allUsers: () => {
        return users
    },

    user: ({ id }) => {
        return users.find(x => x.id == id)
    },

    create: ({ input }) => {
        const id = Date.now()
        const newUser = { id, ...input }

        if (newUser.posts?.length) {
            for (const post of newUser.posts) {
                post.id = "P_" + Date.now()
            }
        }

        users.push(newUser)
        
        return newUser
    },
}

export { root }