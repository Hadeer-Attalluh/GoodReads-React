import React from 'react';
import UserNavBar from './Nav';
import { SignUpForm } from '../FeaturedComponents/UserForms/signup';

const Home = () => {
    return (
        <>
            <UserNavBar />
            <SignUpForm />
        </>
    )
}

export default Home;