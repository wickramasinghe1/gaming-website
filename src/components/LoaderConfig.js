import React from "react";
import {Spinner} from "react-bootstrap";

const Loader = ({isLoading}) => {
    return (
        isLoading ?
            <div style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                zIndex: 100,
                top: 0,
                left: 0,
                backgroundColor: 'rgba(255,255,255,0.8)',
            }} className="">
                <Spinner
                    style={{
                        width: '3rem',
                        height: '3rem',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        margin:' -25px 0 0 -25px' /* apply negative top and left margins to truly center the element */
                    }}
                    variant="primary"
                    // type="grow"
                />



                {/*<Spinner color="primary" />*/}
                {/*<div className='fallback-spinner'>*/}
                {/*    <div className='loading component-loader'>*/}
                {/*        <div className='effect-1 effects'></div>*/}
                {/*        <div className='effect-2 effects'></div>*/}
                {/*        <div className='effect-3 effects'></div>*/}
                {/*    </div>*/}
                {/*</div>*/}

            </div>

            : null
    )
}

export default Loader;
