import { useState } from "react";
import FirstUserDetail from "./components/firstUserDetail/FirstUserDetail";
import SecondUserDetail from "./components/secondUserDetail/SecondUserDetail";
import { OpenAI } from "langchain/llms/openai";
import { PromptTemplate } from "langchain/prompts";
import { LLMChain } from "langchain/chains";
import LyricsPage from "../lyricsPage/LyricsPage";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  theirName: yup
    .string()
    .trim()
    .min(3, "Must be at least 3 words")
    .max(20, "Must be at max 20 words")
    .required("Name is required"),
});

const UserDetailPage = () => {
  const [currentForm, setCurrentForm] = useState<number>(0);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isLyricsGenerated, setIsLyricsGenerated] = useState<boolean>(false);
  const [lyricsText, setLyricsText] = useState<string>("");
  const [formValue, setFormValue] = useState<any>({
    theirName: "",
    age: "",
    gender: "",
    mood: "",
    genre: "",
    singerVoice: "",
  });

  const comments: any = `Wish a happy birthday to ${formValue.theirName}.  
Ensure that "Happy birthday" is mentioned at least twice in the lyrics, and it should rhyme. The lyrics should use simple, short, and easy to pronounce words as much as possible.
Using the above information, please write 16 lines of ${
    formValue.genre
  } lyrics that I can dedicate to ${
    formValue.gender === "male" ? "him" : "her"
  } for ${
    formValue.gender === "male" ? "him" : "her"
  } birthday.  Each line can have maximum of 8 words or 40 characters.
The lyrics generated should be completely unique and never written before every single time and should not in any way or manner infringe on any trademarks/copyrights or any other rights of any individual or entity anywhere in the world. Any references or similarity to existing lyrics of any song anywhere in the world needs to be completely avoided. Any mention of proper nouns i.e. names or places of any manner apart from the ones mentioned above needs to be completely avoided. The lyrics generated should not be insensitive or should not offend any person/ place/ caste/ religion/ creed/ tribe/ country/ gender/ government/ organisation or any entity or individual in any manner whatsoever. Any words which might be construed directly or indirectly as cuss words or are offensive in any language should also be completely avoided. 
            `;

  const handleNext = async (newData: any, final = false) => {
    setFormValue((pre: any) => ({ ...pre, ...newData }));
    if (final) {
      setLoading(true);
      const llm = new OpenAI({
        openAIApiKey: "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",
        temperature: 0.9,
      });

      const template = new PromptTemplate({
        inputVariables: ["celebration"],
        template: `Wish a happy birthday to ${formValue.theirName}.  
    Ensure that "Happy birthday" is mentioned at least twice in the lyrics, and it should rhyme. The lyrics should use simple, short, and easy to pronounce words as much as possible.
    Using the above information, please write 16 lines of ${
      formValue.genre
    } lyrics that I can dedicate to ${
          formValue.gender === "male" ? "him" : "her"
        } for ${
          formValue.gender === "male" ? "him" : "her"
        } birthday.  Each line can have maximum of 8 words or 40 characters.
    The lyrics generated should be completely unique and never written before every single time and should not in any way or manner infringe on any trademarks/copyrights or any other rights of any individual or entity anywhere in the world. Any references or similarity to existing lyrics of any song anywhere in the world needs to be completely avoided. Any mention of proper nouns i.e. names or places of any manner apart from the ones mentioned above needs to be completely avoided. The lyrics generated should not be insensitive or should not offend any person/ place/ caste/ religion/ creed/ tribe/ country/ gender/ government/ organisation or any entity or individual in any manner whatsoever. Any words which might be construed directly or indirectly as cuss words or are offensive in any language should also be completely avoided. 
                `,
      });

      const codeChain = new LLMChain({
        llm,
        prompt: template,
        outputKey: "review",
      });

      const response = await codeChain.call(comments);
      setLyricsText(response.review);
      setIsLyricsGenerated(true);
      setLoading(false);
      return;
    }
    setCurrentForm((pre) => pre + 1);
  };
  const formStep = [
    <FirstUserDetail
      next={handleNext}
      data={formValue}
      validationSchema={validationSchema}
    />,
    <SecondUserDetail
      next={handleNext}
      data={formValue}
      isLoading={isLoading}
    />,
  ];

  return (
    <div>
      {isLyricsGenerated ? (
        <LyricsPage
          text={lyricsText}
          setIsLyricsGenerated={setIsLyricsGenerated}
          setCurrentForm={setCurrentForm}
        />
      ) : (
        formStep[currentForm]
      )}
    </div>
  );
};

export default UserDetailPage;
