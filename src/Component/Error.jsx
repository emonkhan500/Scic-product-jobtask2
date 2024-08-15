import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <section className="flex items-center h-full p-16 dark:bg-gray-50 dark:text-gray-800">
	<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
		<div className="max-w-md text-center">
			<h2 className="mb-8 font-extrabold text-9xl dark:text-gray-400">
				<span className="sr-only">Error</span>404
			</h2>
			<p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
			 <Link to='/' className="px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50"><button className='btn btn-error mt-5 text-white'>Back to homepage</button></Link>
			
		</div>
	</div>
</section>
        </div>
    );
};

export default Error;