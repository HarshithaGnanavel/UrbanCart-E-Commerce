import { Inngest } from "inngest";
import connectDB from "./db";
import User from "@/models/User";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "urbancart-next" });

// Inngest function to save data to a database
export const syncUserCreation = inngest.createFunction(
    {
        id:'sync-user-from-clrek'
    },
    { event: 'clrek/user.created'},
    async ({ event, env }) => {
        const { id, first_name, last_name, email_addresses, image_url } = event.data
        const userData = {
            _id: id,
            email: email_addresses[0].email_address,
            name: first_name + ' ' + last_name,
            imageUrl: image_url
        }
        await connectDB()
        await User.create(userData)
    }
)

//Inngest function to update user data in database

export const syncUserUpdation = inngest.createFunction(
    {
        id: 'update-user-from-clrek'
    },
    { event: 'clrek/user.updated' },
    async ({ event, env }) => {
        const { id, first_name, last_name, email_addresses, image_url } = event.data
        const userData = {
            _id: id,
            email: email_addresses[0].email_address,
            name: first_name + ' ' + last_name,
            imageUrl: image_url
        }
        await connectDB()
        await User.findByIdAndUpdate(id, userData)

    }
)

// Inngest function to delete user from the database

export const syncUserDeletion = inngest.createFunction(
    {
        id: 'delete-user-with-clrek'
    },
    {event: 'clrek/user.deleted'},
    async ({ event, env }) => {
        const { id } = event.data
        
        await connectDB()
        await User.findByIdAndDelete(id)
    }
)