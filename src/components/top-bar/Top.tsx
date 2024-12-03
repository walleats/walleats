import React from 'react';
import { TopBar, TopBarProps } from './TopBar';
import { SearchBar, SearchBarProps } from '../search-bar/SearchBar';

export interface TopProps { 
  topBarProps: TopBarProps; 
  showSearchBar?: boolean;
  searchProps?: SearchBarProps;
}

export const Top = ({ showSearchBar = true, topBarProps, searchProps }: TopProps) => {
  return (
    <div className="flex flex-col py-2 w-full gap-1">
      <TopBar {...topBarProps} />
      {showSearchBar && searchProps && (
        <SearchBar {...searchProps} />
      )}
    </div>
  );
};

