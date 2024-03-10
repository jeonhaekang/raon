"use client";

import { Button, Input, Label, Textarea } from "@/components/common";
import { Section } from "@/components/sections";
import { ChangeEvent, useState } from "react";

const Contact = () => {
  const [content, setContent] = useState({ name: "", email: "", phone: "", companyName: "", content: "" });

  const setData = ({ target: { name, value } }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContent((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Section>
      <form
        onSubmit={(event) => {
          event.preventDefault();

          window.location.href = `mailto:raon.ltd.jp@gmail.com?subject=sample&body=${encodeURIComponent(
            `氏名 : ${content.name}\nメールアドレス : ${content.email}\n連絡先 : ${content.phone}\n会社名 : ${content.companyName}\n\n${content.content}`
          )}`;
        }}
      >
        <h2 className="text-xl text-center sm:text-left">お問い合わせ</h2>

        <div className="flex flex-col gap-4 items-start mt-8">
          <Label required>氏名</Label>
          <Input size={20} required name="name" onChange={setData} />
        </div>

        <div className="flex flex-col gap-4 items-start mt-8">
          <Label required>メールアドレス</Label>
          <Input size={30} required name="email" onChange={setData} />
        </div>

        <div className="flex flex-col gap-4 items-start mt-8">
          <Label required>連絡先</Label>
          <Input size={25} required name="phone" onChange={setData} />
        </div>

        <div className="flex flex-col gap-4 items-start mt-8">
          <Label required>会社名</Label>
          <Input required name="companyName" onChange={setData} />
        </div>

        <div className="flex flex-col gap-4 items-start mt-8">
          <Label required>お問い合わせ内容</Label>
          <Textarea rows={8} className="w-[300px]" required name="content" onChange={setData} />
        </div>

        <Button color="black" width="fix" description="送信" className="mt-8" />
      </form>
    </Section>
  );
};

export default Contact;
