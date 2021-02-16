import { SideMenuComponent } from "src/app/components/partials/side-menu/side-menu.component";
import { NavigationComponent } from "src/app/components/partials/navigation/navigation.component";
import { FooterComponent } from "src/app/components/partials/footer/footer.component";


export function ContentOnly(content) {
    return { content: content };
}

export function NavContent(content) {
    return {
        sidemenu: SideMenuComponent,
        navigation: NavigationComponent,
        content: content,
        footer: FooterComponent
    }
}
