import {Route, Redirect} from 'react-router-dom';

export const grantPermission = (requestedRoles) => {
  const permittedRoles =  JSON.parse(localStorage.getItem('userRoles'));
 // in case of multiple roles, if one of the permittedRoles is present in requestedRoles, return true;
  return false;
};

export default const UnlockAccess = ({ children, request }) => {
  const permission = grantPermission(request); // request = ['ROLE_ADMIN'] / ['ROLE_USER'] / ['ROLE_MANAGER']
  return (
    <>
      {permission && children}
    </>
  );
};

export default function Private({
  component: Component, roles, ...rest
}) {
  return (
    <>
      { grantPermission(roles) && (
      <Route
        {...rest}
        render={(props) => (
          <>
            <Component {...props} />
          </>
        )}
      />
      )}
      {
        !grantPermission(roles) && (
          <Route
            render={() => (
              <>
                <Unauthorized /> // Unauthorized Page View (skippable)
              </>
            )}
          />
        )
      }
    </>
  );
}

//incase you want to do route guarding from the dashboard
/*
<Dashboard>
    <UnlockAccess request={['ROLE_ADMIN']}>
         <>
              {/*Write code/components for Admin Dashboard*/}
         </>                    
    </UnlockAccess>
    <UnlockAccess request={['ROLE_USER']}>
         <>
              {/*Write code/components for User Dashboard*/}
         </>                    
    </UnlockAccess>
    <UnlockAccess request={['ROLE_MANAGER']}>
         <>
              {/*Write code/components for Manager Dashboard*/}
         </>                    
    </UnlockAccess>
</Dashboard>

const ProtectedRoute = ({ component: Component, roles, ...rest }) => (
    <Route {...rest} render={props => {
        const {user} = useAuth();
        if (!user) {
            // not logged in so redirect to login page with the return url
            return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        }
        roles = localStorage.getItem('role');
        // check if route is restricted by role
        if (roles !== 'owner') {
            // role not authorised so redirect to home page
            //return <Redirect to={{ pathname: '/'}} />
            history.goBack()
        }

        // authorised so return component
        return <Component {...props} />
    }} />

*/
