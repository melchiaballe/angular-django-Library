import { NavigationComponent } from '../../components/partials/navigation/navigation.component';

export function ContentOnly (content:any) {
  return { content : content };
}

export function NavContent (content:any) {
  return {
    navigation : NavigationComponent,
    content    : content
  };
}