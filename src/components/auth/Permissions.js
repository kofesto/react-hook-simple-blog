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
*/
