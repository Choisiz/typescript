import { Component } from "./components/component.js";
import { InputDialog } from "./components/dialog/dialog.js";
import { ImageComponent } from "./components/page/item/image.js";
import { NoteComponent } from "./components/page/item/note.js";
import { TodoComponent } from "./components/page/item/todo.js";
import { VideoComponent } from "./components/page/item/video.js";
import {
  Composable,
  PageComponent,
  PageItemComponent,
} from "./components/page/page.js";

class App {
  private readonly page: Component & Composable;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent(PageItemComponent);
    this.page.attachTo(appRoot);

    const image = new ImageComponent(
      "Image Title",
      "https://picsum.photos/600/300"
    );
    this.page.addChild(image);
    //image.attachTo(appRoot, "beforeend");

    const video = new VideoComponent(
      "video title",
      "https://youtu.be/K3-jG52XwuQ"
    );
    this.page.addChild(video);
    //video.attachTo(appRoot, "beforeend");

    const note = new NoteComponent("Note title", "NoteBody");
    this.page.addChild(note);
    //note.attachTo(appRoot, "beforeend");

    const todo = new TodoComponent("Todo title", "todoItem");
    this.page.addChild(todo);
    //todo.attachTo(appRoot, "beforeend");

    const imageBtn = document.querySelector("#new-image")! as HTMLButtonElement;
    imageBtn.addEventListener("click", () => {
      const dialog = new InputDialog();

      dialog.setOnCloseListenr(() => {
        dialog.removeFrom(document.body);
      });
      dialog.setOnSubmitListenr(() => {
        // 섹션을 만들어서 페이지에 추가 해준다
        dialog.removeFrom(document.body);
      });

      dialog.attachTo(document.body);
    });
  }
}

new App(document.querySelector(".document")! as HTMLElement);