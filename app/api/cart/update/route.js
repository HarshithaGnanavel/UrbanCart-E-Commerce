import { getAuth } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import connectDB from '@/config/db'
import User from '@/models/User'


export async function POST(request){
    try{

        const { userId } = getAuth(request)

        const { cartData } = await request.json()

        await connectDB()
        const user = await User.findById(userId);

        user.cartItems = cartData
        user.save()

        /*if (!user) {
            return NextResponse.json({
                success: false,
                message: "User not found",
            });
        }

        user.cartItems = cartData
        await user.save()*/

        return NextResponse.json({success: true})
    } catch(error){
        return NextResponse.json({success: false, message: error.message})
    
    }
}