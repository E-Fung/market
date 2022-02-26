import React, { useMemo } from 'react';
// import { Link } from 'react-router-dom';
import { LockClosedIcon } from '@heroicons/react/solid';
import { register } from './redux/utils/thunkCreators';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

const Register = (props) => {
  const { register, user } = props;

  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    await register({ name, email, password });
  };

  const registItems = useMemo(() => {
    //type, Title, ID
    return [
      ['text', 'Name', 'name'],
      ['email', 'Email address', 'email-address'],
      ['password', 'Password', 'password'],
    ];
  }, []);

  if (user.email) {
    return <Navigate replace to="/" />;
  }

  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
          <h2 className="mt-6 text-center text-3xl font-extrabold">Sign in to your account</h2>
        </div>
        <form className="mt-8 space-y-6" action="#" onSubmit={handleRegister}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            {registItems.map(([type, title, id]) => (
              <div key={title}>
                <label htmlFor={id} className="sr-only">
                  {title}
                </label>
                <input
                  id={id}
                  name={type}
                  type={type}
                  // autoComplete={type}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder={title}
                />
              </div>
            ))}
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
              </span>
              Register
            </button>
          </div>
        </form>
      </div>
      <div>
        <button
          onClick={() => {
            console.log(user);
          }}
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Check User
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    register: (credentials) => {
      dispatch(register(credentials));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
