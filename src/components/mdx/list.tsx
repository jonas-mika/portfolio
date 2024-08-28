"use client";

import React from "react";

type MDXListProps = {
  enumerate?: boolean;
  children: React.ReactNode;
};

export function MDXList(props: MDXListProps) {
  const childrenArray = React.Children.toArray(props.children);

  return (
    <ul>
      {React.Children.map(childrenArray, (child, index) => {
        if (React.isValidElement(child) && child.type === MDXListItem) {
          return React.cloneElement(child, {number: index+1});
        }
        return child;
      })}
    </ul>
  );
}

type MDXListItemProps = {
  children: React.ReactNode;
  number?: number;
};

export function MDXListItem(props: MDXListItemProps) {
  return (
    <li className="relative bg-popover my-4 p-4 pl-8 rounded-lg list-none mx-0">
      {props.number && (
        <span className="absolute top-2 left-2 text-sm font-bold text-accent-foreground">{props.number}</span>
      )}
      {props.children}
    </li>
  );
}