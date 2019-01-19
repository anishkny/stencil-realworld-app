/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';

import '@stencil/router';
import '@stencil/state-tunnel';
import {
  IUser,
} from './userTunnel';
import {
  TSignOut,
} from './api/auth';
import {
  MatchResults,
  RouterHistory,
} from '@stencil/router';


export namespace Components {

  interface AppRoot {}
  interface AppRootAttributes extends StencilHTMLAttributes {}

  interface AppFooter {}
  interface AppFooterAttributes extends StencilHTMLAttributes {}

  interface AppHeader {
    'signOut': TSignOut;
    'user'?: IUser;
  }
  interface AppHeaderAttributes extends StencilHTMLAttributes {
    'signOut'?: TSignOut;
    'user'?: IUser;
  }

  interface NotFound {
    'history': RouterHistory;
  }
  interface NotFoundAttributes extends StencilHTMLAttributes {
    'history'?: RouterHistory;
  }

  interface ArticlePage {}
  interface ArticlePageAttributes extends StencilHTMLAttributes {}

  interface AuthPage {
    'match': MatchResults;
    'setUser': (user: IUser) => void;
  }
  interface AuthPageAttributes extends StencilHTMLAttributes {
    'match'?: MatchResults;
    'setUser'?: (user: IUser) => void;
  }

  interface EditorPage {}
  interface EditorPageAttributes extends StencilHTMLAttributes {}

  interface HomeFeed {}
  interface HomeFeedAttributes extends StencilHTMLAttributes {}

  interface HomePage {}
  interface HomePageAttributes extends StencilHTMLAttributes {}

  interface HomeTags {}
  interface HomeTagsAttributes extends StencilHTMLAttributes {}

  interface ProfilePage {
    'match': MatchResults;
    'settingsTab'?: boolean;
  }
  interface ProfilePageAttributes extends StencilHTMLAttributes {
    'match'?: MatchResults;
    'settingsTab'?: boolean;
  }

  interface SettingsPage {
    'setUser': (user: IUser) => void;
    'user': IUser;
  }
  interface SettingsPageAttributes extends StencilHTMLAttributes {
    'setUser'?: (user: IUser) => void;
    'user'?: IUser;
  }
}

declare global {
  interface StencilElementInterfaces {
    'AppRoot': Components.AppRoot;
    'AppFooter': Components.AppFooter;
    'AppHeader': Components.AppHeader;
    'NotFound': Components.NotFound;
    'ArticlePage': Components.ArticlePage;
    'AuthPage': Components.AuthPage;
    'EditorPage': Components.EditorPage;
    'HomeFeed': Components.HomeFeed;
    'HomePage': Components.HomePage;
    'HomeTags': Components.HomeTags;
    'ProfilePage': Components.ProfilePage;
    'SettingsPage': Components.SettingsPage;
  }

  interface StencilIntrinsicElements {
    'app-root': Components.AppRootAttributes;
    'app-footer': Components.AppFooterAttributes;
    'app-header': Components.AppHeaderAttributes;
    'not-found': Components.NotFoundAttributes;
    'article-page': Components.ArticlePageAttributes;
    'auth-page': Components.AuthPageAttributes;
    'editor-page': Components.EditorPageAttributes;
    'home-feed': Components.HomeFeedAttributes;
    'home-page': Components.HomePageAttributes;
    'home-tags': Components.HomeTagsAttributes;
    'profile-page': Components.ProfilePageAttributes;
    'settings-page': Components.SettingsPageAttributes;
  }


  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLAppFooterElement extends Components.AppFooter, HTMLStencilElement {}
  var HTMLAppFooterElement: {
    prototype: HTMLAppFooterElement;
    new (): HTMLAppFooterElement;
  };

  interface HTMLAppHeaderElement extends Components.AppHeader, HTMLStencilElement {}
  var HTMLAppHeaderElement: {
    prototype: HTMLAppHeaderElement;
    new (): HTMLAppHeaderElement;
  };

  interface HTMLNotFoundElement extends Components.NotFound, HTMLStencilElement {}
  var HTMLNotFoundElement: {
    prototype: HTMLNotFoundElement;
    new (): HTMLNotFoundElement;
  };

  interface HTMLArticlePageElement extends Components.ArticlePage, HTMLStencilElement {}
  var HTMLArticlePageElement: {
    prototype: HTMLArticlePageElement;
    new (): HTMLArticlePageElement;
  };

  interface HTMLAuthPageElement extends Components.AuthPage, HTMLStencilElement {}
  var HTMLAuthPageElement: {
    prototype: HTMLAuthPageElement;
    new (): HTMLAuthPageElement;
  };

  interface HTMLEditorPageElement extends Components.EditorPage, HTMLStencilElement {}
  var HTMLEditorPageElement: {
    prototype: HTMLEditorPageElement;
    new (): HTMLEditorPageElement;
  };

  interface HTMLHomeFeedElement extends Components.HomeFeed, HTMLStencilElement {}
  var HTMLHomeFeedElement: {
    prototype: HTMLHomeFeedElement;
    new (): HTMLHomeFeedElement;
  };

  interface HTMLHomePageElement extends Components.HomePage, HTMLStencilElement {}
  var HTMLHomePageElement: {
    prototype: HTMLHomePageElement;
    new (): HTMLHomePageElement;
  };

  interface HTMLHomeTagsElement extends Components.HomeTags, HTMLStencilElement {}
  var HTMLHomeTagsElement: {
    prototype: HTMLHomeTagsElement;
    new (): HTMLHomeTagsElement;
  };

  interface HTMLProfilePageElement extends Components.ProfilePage, HTMLStencilElement {}
  var HTMLProfilePageElement: {
    prototype: HTMLProfilePageElement;
    new (): HTMLProfilePageElement;
  };

  interface HTMLSettingsPageElement extends Components.SettingsPage, HTMLStencilElement {}
  var HTMLSettingsPageElement: {
    prototype: HTMLSettingsPageElement;
    new (): HTMLSettingsPageElement;
  };

  interface HTMLElementTagNameMap {
    'app-root': HTMLAppRootElement
    'app-footer': HTMLAppFooterElement
    'app-header': HTMLAppHeaderElement
    'not-found': HTMLNotFoundElement
    'article-page': HTMLArticlePageElement
    'auth-page': HTMLAuthPageElement
    'editor-page': HTMLEditorPageElement
    'home-feed': HTMLHomeFeedElement
    'home-page': HTMLHomePageElement
    'home-tags': HTMLHomeTagsElement
    'profile-page': HTMLProfilePageElement
    'settings-page': HTMLSettingsPageElement
  }

  interface ElementTagNameMap {
    'app-root': HTMLAppRootElement;
    'app-footer': HTMLAppFooterElement;
    'app-header': HTMLAppHeaderElement;
    'not-found': HTMLNotFoundElement;
    'article-page': HTMLArticlePageElement;
    'auth-page': HTMLAuthPageElement;
    'editor-page': HTMLEditorPageElement;
    'home-feed': HTMLHomeFeedElement;
    'home-page': HTMLHomePageElement;
    'home-tags': HTMLHomeTagsElement;
    'profile-page': HTMLProfilePageElement;
    'settings-page': HTMLSettingsPageElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}