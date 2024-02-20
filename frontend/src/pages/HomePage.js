import React from 'react'
import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layouts/Layout';

const HomePage = () => {

  // Placeholder data for mental and physical health information
  const mentalHealthInfo = "Explore mindfulness exercises and mental health tools/games to boost your well-being.";
  const physicalHealthInfo = "Discover personalized fitness plans and exciting challenges to keep yourself active and healthy.";

  return (
    <Layout>
      <div style={{maxWidth: "90%", margin: "auto"}}>
      <section className="bg-white mx-auto py-4 px-8 dark:bg-slate-800 grid grid-cols-12">
        <div className="lg:py-16 mr-4 col-span-full md:col-span-8">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Why Wellness Hub?
          </h1>
          <p className="mb-2 text-base font-normal text-gray-500 dark:text-slate-200">
          At our website, we understand that mental and physical wellness are not just buzzwords; they're essential components of a fulfilling life. We recognize that in today's fast-paced world, it's easy to neglect our well-being amidst the demands of daily life. That's why we're dedicated to providing you with the resources and support you need to prioritize your mental and physical health. Through our platform, you'll discover a wealth of expert-curated content, from mindfulness exercises to workout routines tailored to your needs. By investing in your wellness journey with us, you're not just investing in a product – you're investing in yourself, your happiness, and your future. Join our community today and take the first step toward a healthier, more balanced life.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <Link to="#">
              <Button>
                Login
              </Button>
            </Link>
          </div>
        </div>
        <div className='col-span-full md:col-span-4 flex justify-center m-auto'>
          <img  src="https://img.freepik.com/free-vector/healthy-people-carrying-different-icons_53876-43069.jpg?w=826&t=st=1708410197~exp=1708410797~hmac=5e8154f63bb9a850865d24a5b8282ba11b8f801f320c5275f16ff5f78009e580" alt="Fitness" className="rounded-lg" />
        </div>
      </section>
      </div>
    </Layout>
  )
}

export default HomePage;