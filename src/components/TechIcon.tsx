import React from "react";

export const TechIcon = ({component} : {component : React.ElementType}) => {
   const Component = component;
    return <Component className={`size-10 bg-gradient-to-r from-emerald-300 to-yellow  `}/>
}