import React from 'react';

//materialize
import { Navbar, Icon, Button } from 'react-materialize';

//router
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return(
        <React.Fragment>
            <Navbar
                alignLinks="left"
                brand={!props.isAuth && 
                    <span className="brand-logo right" >
                        <Button node="a" onClick={props.handleLogin}>
                            Login
                        </Button>
                    </span>}
                id="mobile-nav"
                menuIcon={<Icon>menu</Icon>}
                style={{backgroundColor:'#535353'}}
                options={{
                    draggable: true,
                    edge: 'left',
                    inDuration: 250,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    outDuration: 200,
                    preventScrolling: true
                }}
                >
                <NavLink to='/'> Home </NavLink>
                {props.isAuth &&  <NavLink to='/profile'> Profile </NavLink>}
            </Navbar>
        </React.Fragment>
    )
   }
export default Header;