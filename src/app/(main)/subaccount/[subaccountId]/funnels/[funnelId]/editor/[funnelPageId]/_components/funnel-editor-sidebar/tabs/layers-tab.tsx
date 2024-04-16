"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { EditorElement, useEditor } from "@/providers/editor/editor-provider";
import clsx from "clsx";
import {
  BoxSelect,
  Contact2,
  CreditCardIcon,
  Image,
  ImageIcon,
  Link2Icon,
  TypeIcon,
  Youtube,
} from "lucide-react";
import React from "react";

type RecursiveAccordianItemProps = {
  element: EditorElement;
};

const RecursiveAccordianItem = (props: RecursiveAccordianItemProps) => {
  const { state, dispatch } = useEditor();

  const handleSelectElement = (e: React.MouseEvent, element: EditorElement) => {
    e.stopPropagation();

    dispatch({
      type: "CHANGE_CLICKED_ELEMENT",
      payload: { elementDetails: element },
    });
  };

  return Array.isArray(props.element.content) ? (
    !!props.element.content.length ? (
      <AccordionItem
        value={props.element.id}
        className="pl-2 transition-all border-y-[1px] border-r-0 border-l-none border-muted-foreground/30   hover: pb-0"
        onClick={(e) => handleSelectElement(e, props.element)}
      >
        <AccordionTrigger
          className={clsx("!no-underline p-2 text-sm", {
            "bg-muted-foreground/30": state.editor.selectedElement.id === props.element.id,
          })}
        >
          <div className="flex items-center gap-2">
            {props.element.type === "container" ? (
              <BoxSelect size={16} className="text-muted-foreground" />
            ) : props.element.type === "image" ? (
              <ImageIcon size={16} className="text-muted-foreground" />
            ) : props.element.type === "__body" ? (
              <BoxSelect size={16} className="text-muted-foreground" />
            ) : props.element.type === "contactForm" ? (
              <Contact2 size={16} className="text-muted-foreground" />
            ) : props.element.type === "2Col" ? (
              <BoxSelect size={16} className="text-muted-foreground" />
            ) : props.element.type === "paymentForm" ? (
              <CreditCardIcon size={16} className="text-muted-foreground" />
            ) : props.element.type === "text" ? (
              <TypeIcon size={16} className="text-muted-foreground" />
            ) : props.element.type === "link" ? (
              <Link2Icon size={16} className="text-muted-foreground" />
            ) : props.element.type === "video" ? (
              <Youtube size={16} className="text-muted-foreground" />
            ) : null}
            {props.element.name}
          </div>
        </AccordionTrigger>
        <AccordionContent className="flex flex-col pb-0">
          {Array.isArray(props.element.content) &&
            props.element.content.map((childElement) => (
              <RecursiveAccordianItem
                key={childElement.id}
                element={childElement}
              />
            ))}
        </AccordionContent>
      </AccordionItem>
    ) : (
      <div
        className="flex items-center gap-2 pl-4 py-2 cursor-pointer"
        onClick={(e) => handleSelectElement(e, props.element)}
      >
        {props.element.type === "container" ? (
          <BoxSelect size={16} className="text-muted-foreground" />
        ) : props.element.type === "image" ? (
          <ImageIcon size={16} className="text-muted-foreground" />
        ) : props.element.type === "__body" ? (
          <BoxSelect size={16} className="text-muted-foreground" />
        ) : props.element.type === "contactForm" ? (
          <Contact2 size={16} className="text-muted-foreground" />
        ) : props.element.type === "2Col" ? (
          <BoxSelect size={16} className="text-muted-foreground" />
        ) : props.element.type === "paymentForm" ? (
          <CreditCardIcon size={16} className="text-muted-foreground" />
        ) : props.element.type === "text" ? (
          <TypeIcon size={16} className="text-muted-foreground" />
        ) : props.element.type === "link" ? (
          <Link2Icon size={16} className="text-muted-foreground" />
        ) : props.element.type === "video" ? (
          <Youtube size={16} className="text-muted-foreground" />
        ) : null}
        {props.element.name}
      </div>
    )
  ) : (
    <div
      className="flex items-center gap-2 pl-4 py-2 cursor-pointer"
      onClick={(e) => handleSelectElement(e, props.element)}
    >
      {props.element.type === "container" ? (
        <BoxSelect size={16} className="text-muted-foreground" />
      ) : props.element.type === "image" ? (
        <ImageIcon size={16} className="text-muted-foreground" />
      ) : props.element.type === "__body" ? (
        <BoxSelect size={16} className="text-muted-foreground" />
      ) : props.element.type === "contactForm" ? (
        <Contact2 size={16} className="text-muted-foreground" />
      ) : props.element.type === "2Col" ? (
        <BoxSelect size={16} className="text-muted-foreground" />
      ) : props.element.type === "paymentForm" ? (
        <CreditCardIcon size={16} className="text-muted-foreground" />
      ) : props.element.type === "text" ? (
        <TypeIcon size={16} className="text-muted-foreground" />
      ) : props.element.type === "link" ? (
        <Link2Icon size={16} className="text-muted-foreground" />
      ) : props.element.type === "video" ? (
        <Youtube size={16} className="text-muted-foreground" />
      ) : null}
      {props.element.name}
    </div>
  );
};

const LayersTab = () => {
  const { state } = useEditor();

  return (
    <Accordion type="multiple" className="w-full ">
      {state.editor.elements.map((childElement) => (
        <RecursiveAccordianItem key={childElement.id} element={childElement} />
      ))}
    </Accordion>
  );
};

export default LayersTab;
