"use client"

import { useLanguage } from "@/context/language-context"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BookOpen, GraduationCap, School } from "lucide-react"

export function GraduateExamExperiencePost() {
  const { language } = useLanguage()
  
  // Tag definitions with icons
  const tags = [
    { id: "exam", en: "Graduate Exam", zh: "考研", icon: <GraduationCap className="h-4 w-4" /> },
    { id: "education", en: "Education", zh: "教育", icon: <School className="h-4 w-4" /> },
    { id: "experience", en: "Experience", zh: "经验", icon: <BookOpen className="h-4 w-4" /> }
  ]
  
  return (
    <div className="max-w-4xl mx-auto">
      <Button 
        variant="ghost" 
        asChild
        className="mb-6"
      >
        <Link href="/blog">
          ← {language === "en" ? "Back to all posts" : "返回所有文章"}
        </Link>
      </Button>
      
      <article className="prose dark:prose-invert max-w-none leading-relaxed">
        {language === "en" ? (
          <>
            <h1 className="text-4xl font-bold tracking-tight text-center mb-4">
              Graduate Entrance Exam Experience: Strategic Insights from a Top-3 University Admit
            </h1>
            
            <div className="flex justify-center mt-2 mb-4">
              <time className="text-muted-foreground text-center">
                April 6, 2025
              </time>
            </div>
            
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {tags.map(tag => (
                <Badge key={tag.id} variant="outline" className="bg-muted py-1 px-3">
                  <span className="flex items-center gap-1.5">
                    {tag.icon}
                    <span>{tag.en}</span>
                  </span>
                </Badge>
              ))}
            </div>
            
            <div className="h-px w-full bg-gray-200 dark:bg-gray-700 mb-8"></div>

            <h2 className="text-2xl font-bold mt-6 mb-6">Introduction</h2>
            <p className="leading-relaxed text-base">
              As someone who ranked first in both the written exam and interview for admission to a TOP-3 university in China, I'd like to share my experience and insights, combined with observations from my fellow exam-takers.
            </p>

            <div className="h-px w-full bg-gray-200 dark:bg-gray-700 my-10"></div>

            <h2 className="text-2xl font-bold mt-10 mb-6">University Selection</h2>
            <p className="leading-relaxed text-base">
              Although my undergraduate degree is from a regular "Double First-Class" university, I'm in a strong major where many students each year get into TOP-3 universities through either the graduate entrance exam or direct recommendation. Plus, two good friends from different universities were already admitted there through recommendation, so I decisively chose this university. Overall, if you're not in a highly competitive major, top-tier 985 universities are worth aiming for. Even with high cutoff scores, around 360 points is usually sufficient, giving you substantial room for error. With dedicated effort, it's absolutely achievable. For highly competitive majors, however, you should carefully consider the margin for error.
            </p>

            <div className="h-px w-full bg-gray-200 dark:bg-gray-700 my-10"></div>

            <h2 className="text-2xl font-bold mt-10 mb-6">General Methodology</h2>
            <p className="leading-relaxed text-base">
              1. Mentality matters far more than effort. This is the most crucial point. Many students experience mental breakdowns in the final month or even days before the exam, which is truly unfortunate. Maintaining confidence and optimism is essential.
            </p>
            <p className="leading-relaxed text-base mt-4">
              2. Sustainable, consistent goals are better than high-intensity cramming. I've seen many students create overly packed schedules that they can't complete due to various circumstances. Excessive goals can negatively impact your mental state. Balance between work and rest, along with persistence, is more important. Setting unrealistically high goals can undermine your confidence and lead to abandoning your efforts halfway.
            </p>
            <p className="leading-relaxed text-base mt-4">
              3. Practice questions take priority over watching lectures. Avoid lectures when possible. Of course, staring at materials can also make it difficult to concentrate, so you can watch lectures to organize your thoughts, but don't let lectures take away from practice time.
            </p>
            <p className="leading-relaxed text-base mt-4">
              4. Don't easily trust what teachers and online content creators say. Their goal is to sell more courses and make more money, so they generate anxiety, and once you're anxious, they sell you courses or materials.
            </p>
            <p className="leading-relaxed text-base mt-4">
              5. Reject perfectionism; complete tasks first, then perfect them. For most universities and majors, a reasonably good score is sufficient. There's no need to pursue perfection, which can either cause mental issues or result in imbalanced subject performance where you fail to meet minimum requirements in certain subjects.
            </p>
            <p className="leading-relaxed text-base mt-4">
              6. Time management and priorities: March-September: Mathematics takes highest priority; you must complete your self-set tasks. English (1hr) and specialized courses (2hrs) just need sufficient time; reduce if you have too many lectures. October-early December: Specialized courses take highest priority; you must complete your self-set tasks. For mathematics, complete daily assignments (one full practice paper); political theory needs sufficient time (1hr); study English as time permits. Early December-Exam: Political theory and specialized courses take highest priority; mathematics requires daily assignments (one full or half practice paper); maintain English practice to keep your skills sharp.
            </p>
            <p className="leading-relaxed text-base mt-4">
              7. It's never too late to start. Many students who began in July or even September still got into excellent universities. Don't worry too much about your progress; focus more on your understanding and capability.
            </p>

            <div className="h-px w-full bg-gray-200 dark:bg-gray-700 my-10"></div>

            <h2 className="text-2xl font-bold mt-10 mb-6">Political Theory</h2>
            <p className="leading-relaxed text-base">
              This is the least important subject; just passing the threshold is fine. I didn't score very high in it either. For this subject, study Marxist principles well, and just review the rest occasionally. Many students who dedicate significant daily time to it—and even some who barely study it—score well. If you're aiming for an ordinary university, you can relax; use political theory study as a break during your regular study routine. Just study "Xiao Ba" and "Xiao Si" materials well and memorize them. For 985 universities, there are minimum subject thresholds, so you should still study seriously. I saw a case on Xiaohongshu (Little Red Book) where a student applying to a 985 university scored high in all other subjects but failed to meet the political theory threshold because they followed advice from a Bilibili creator named Paradiyu and only started studying in late November, which was quite unfortunate.
            </p>
            <p className="leading-relaxed text-base mt-4">
              My preparation began with Teacher Xu Tao's memorization handbook. I followed his intensive course for Marxist principles once, and his previous year's intensive classes for History Outline, Mao Zedong Thought, and Ideological and Moral Cultivation. During this time, I used spare moments to complete the Marxist principles section of the 1000-question set and followed Xu Tao's daily questions. When mock exams became available on the mini-program, I started doing lots of practice papers, basically completing one set and reviewing another set each day until I began memorizing subjective questions. After that, I alternated between doing and reviewing. This year's questions were described by Xiao Xiurong as the most difficult in ten years, and indeed they were quite flexible, requiring deep understanding rather than surface-level memorization.
            </p>
            <p className="leading-relaxed text-base mt-4">
              For subjective questions, I only memorized "Xiao Si." After receiving it, I spent about three hours daily (though half of that time was spent anxious, and after subtracting time for organizing and printing materials, I effectively memorized for about an hour daily). I've had poor memory since childhood, and combined with the anxiety of not being able to memorize everything, I couldn't even get through the condensed version summarized by Bilibili creators. I mainly became familiar with the content, with deeper impressions of the answer approaches, important phrases, and frameworks. Before the exam, I watched Teacher Yu Feng's technique class on Bilibili, mainly covering objective question techniques and how to incorporate material into subjective answers, which was quite useful. In the exam, although I hadn't completely memorized everything, by following the framework and incorporating material, I still achieved a decent score.
            </p>

            <div className="h-px w-full bg-gray-200 dark:bg-gray-700 my-10"></div>

            <h2 className="text-2xl font-bold mt-10 mb-6">English</h2>
            <p className="leading-relaxed text-base">
              Recently, there have been many scandals in the graduate exam English teaching circle, with many teachers scoring lower than I did. I realized early on that this circle was quite unprofessional. When learning English reading, I found that these teachers' methods were more like explaining answers rather than teaching skills. I watched a few sessions and stopped. This was further confirmed when they taught essay writing. In my freshman year, our English teacher was an exam grader who told us what makes a good essay: 1. Avoid grammatical errors, 2. Express ideas smoothly without clichés, 3. Stay on topic with high information density. But the templates provided by these graduate exam English teachers are full of clichés with almost zero information density—it would be strange if they scored well.
            </p>
            <p className="leading-relaxed text-base mt-4">
              Let me share my foundation: I passed CET-4 and CET-6 on the first attempt, with a CET-6 score of 500, but I hadn't studied English for a long time and my vocabulary was particularly weak. So during winter break, I dedicated 10 days to intensive vocabulary building, spending over 5 hours daily. I set a target of 500 words per day in the MoMo app, focusing on key graduate exam vocabulary, and also studied synonyms and word roots/affixes. After these 10 days, I recognized virtually all the vocabulary in question stems. Afterward, I set a daily target of 100 real exam vocabulary words in MoMo, quickly reviewing them in spare moments (swiping past each word once I saw its meaning).
            </p>
            <p className="leading-relaxed text-base mt-4">
              Regarding methodologies for different question types, as mentioned above, I don't recommend wasting time on these teachers' courses. If necessary, you can watch quick tutorials on Bilibili or review some notes. For essays, you can find any template to learn the framework (what content to generally include), but don't learn the expressions they use. Instead, learn from GPT and use GPT to review your essays.
            </p>
            <p className="leading-relaxed text-base mt-4">
              Additionally, early-year exam questions differ significantly in style and difficulty from recent years, so don't let them damage your confidence; use them only to familiarize yourself with question types. My study materials were just the 9.9 yuan English Type 1 and 2 past papers and an electronic version of the Yellow Book. Starting in March, I began doing full papers regardless of question type (except essays), spending 1 hour daily. For questions I got wrong, I analyzed how the examiners set traps. If needed, I consulted the electronic Yellow Book and looked up unfamiliar words afterward. I also reviewed vocabulary and incorrect questions from the previous two days daily. From October onward, I started writing essays when doing practice papers. Write frequently, have a framework in mind, and after writing a few times, you'll naturally get the hang of it without needing to deliberately memorize (though you should still memorize a bit in the days before the exam). If you've completed all questions once, focus on studying post-2016 questions, and also practice with English Type 2 or 1 (whichever you're not taking) to maintain the feeling of working with new questions.
            </p>

            <div className="h-px w-full bg-gray-200 dark:bg-gray-700 my-10"></div>

            <h2 className="text-2xl font-bold mt-10 mb-6">Mathematics</h2>
            <p className="leading-relaxed text-base">
              There are too many experience posts about this subject online. Although I didn't score poorly, I'll just share briefly.
            </p>
            <p className="leading-relaxed text-base mt-4">
              From winter break to May, I used the 2024 version (the 2025 version is reportedly more difficult, so I used the older version) of Zhang Yu's "30 Lectures" and foundational course, working through the 300 Questions and 880 Foundational Section.
            </p>
            <p className="leading-relaxed text-base mt-4">
              From May to mid-August, I used the 2023 version (again, the 2025 version is reportedly more difficult) of Zhang Yu's "27 Lectures" and intensive course. When following the lectures, I paused whenever a problem was presented to try solving it myself before watching the solution. I completed the exercises from the 27 Lectures and the 880 Intensive Section.
            </p>
            <p className="leading-relaxed text-base mt-4">
              From mid-August to mid-September, I worked through Yu Bingsen's compiled past exam questions (including questions from Mathematics 1, 2, and 3), interspersed with a second review of Zhang Yu's 27 Lectures examples and exercises (the examples are generally the most important problems, and the 27 Lectures cover a comprehensive range of problem types).
            </p>
            <p className="leading-relaxed text-base mt-4">
              From mid-September until the exam, I did mock papers from 8:30 to 11:30 daily (most papers don't require the full 3 hours, so after finishing, I could review errors and organize an error collection, usually having lunch around noon). I worked through all the well-regarded 2024 and 2025 papers on the market once (HFUT, Li Lin, Yu Bingsen, etc.). I don't recommend attempting the more difficult ones like Zhang Yu's.
            </p>
            <p className="leading-relaxed text-base mt-4">
              Additionally, I followed Wu Zhongxiang's daily problems. For concepts you don't fully understand while solving problems, you can check Bilibili, and nowadays you can also ask GPT. Although I don't recommend following Bilibili creators, watching some videos (like Your Gourd, Yeyu's various courses, 3blue1brown's linear algebra) as supplementary material is quite good.
            </p>

            <div className="h-px w-full bg-gray-200 dark:bg-gray-700 my-10"></div>

            <h2 className="text-2xl font-bold mt-10 mb-6">Specialized Courses</h2>
            <p className="leading-relaxed text-base">
              When reviewing, don't blindly memorize; use an outline + understanding approach. Don't rely excessively on materials; you can create your own outline or notes. Resources for Atmospheric Dynamics and Thermodynamics are quite comprehensive in the market. I've compiled a "Atmospheric Physics" resource that covers all basic knowledge points, which I've made open source for anyone to view and modify (link: https://pan.baidu.com/s/1I3ThNjsIJ0QkyWbm36MlkQ?pwd=e9vj).
            </p>
            <p className="leading-relaxed text-base mt-4">
              From March to September, go through all content meticulously, and thoroughly study the corresponding past exam questions for each chapter as you learn it.
            </p>
            <p className="leading-relaxed text-base mt-4">
              From September to October, spend a month studying past years' questions chronologically, analyzing question styles and approaches, and writing out answers by hand.
            </p>
            <p className="leading-relaxed text-base mt-4">
              From early October to early December, create an outline based on question patterns and approaches, highlighting potentially testable content and previously tested content in your outline.
            </p>
            <p className="leading-relaxed text-base mt-4">
              From early December until the exam, intensively memorize based on past questions and your outline.
            </p>

            <div className="h-px w-full bg-gray-200 dark:bg-gray-700 my-10"></div>

            <h2 className="text-2xl font-bold mt-10 mb-6">Interview</h2>
            <p className="leading-relaxed text-base">
              I'm a typical introvert and was very nervous during the interview. I couldn't answer many questions, and my voice was trembling, but I still ranked first. My impression is that effort should be applied to regular academic activities; you should participate in more research, as professors value the research experience, demonstrated abilities, and undergraduate performance you mention in your self-introduction.
            </p>
            <p className="leading-relaxed text-base mt-4">
              I recommend looking up international PhD admission announcements in your field (why international? because domestic ones don't include the following content). Find several announcements, see what qualities these professors value, and subtly mention them in your self-introduction. If certain tools or skills are required, learn them and mention them in your introduction. Additionally, be genuine; what you mention in your self-introduction should be things you have a relatively deep understanding of to avoid exposing weaknesses.
            </p>
          </>
        ) : (
          <>
            <h1 className="text-4xl font-bold tracking-tight text-center mb-4">
              考研经验贴
            </h1>
            
            <div className="flex justify-center mt-2 mb-4">
              <time className="text-muted-foreground text-center">
                2025年4月6日
              </time>
            </div>
            
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {tags.map(tag => (
                <Badge key={tag.id} variant="outline" className="bg-muted py-1 px-3">
                  <span className="flex items-center gap-1.5">
                    {tag.icon}
                    <span>{tag.zh}</span>
                  </span>
                </Badge>
              ))}
            </div>
            
            <div className="h-px w-full bg-gray-200 dark:bg-gray-700 mb-8"></div>
            
            <h2 className="text-2xl font-bold mt-6 mb-6">引言</h2>
            <p className="leading-relaxed text-base">
              作者以初试和复试双第一考入某TOP3，结合身边研友的状况和自己的经验给大家分享一下经验。
            </p>

            <div className="h-px w-full bg-gray-200 dark:bg-gray-700 my-10"></div>

            <h2 className="text-2xl font-bold mt-10 mb-6">择校</h2>
            <p className="leading-relaxed text-base">
              虽然本人本科是普通双一流，但是鉴于我们是强势专业，每年都有很多人考研/保研去TOP3，加上两个大学的好朋友保研去了这所，所以择校果断选了这所。总体来看，如果是不是热门专业，强985还是值得冲的，因为分数线再高，大概360也够了，算是也有极高的容错，努努力还是绝对没问题的。如果是热门专业还是要考虑一下容错率。
            </p>

            <div className="h-px w-full bg-gray-200 dark:bg-gray-700 my-10"></div>

            <h2 className="text-2xl font-bold mt-10 mb-6">总体方法论</h2>
            <p className="leading-relaxed text-base">
              1. 心态远重于努力。这是最为关键的一点。很多同学在最后一个月甚至最后几天心态崩盘，实在可惜。保持自信，保持乐观很重要。
            </p>
            <p className="leading-relaxed text-base mt-4">
              2. 能持续坚持的目标优于高强度的冲刺目标。看到许多同学计划得很满，但往往因为各种琐事无法完成，目标过高容易影响心态；劳逸结合，持之以恒更为重要，定得太高反而容易打击信心，半途而废。
            </p>
            <p className="leading-relaxed text-base mt-4">
              3. 做题优先于看课。能不看课就不看，当然盯着资料看也很容易精力不集中，可以看课把自己的思路梳理一下，但是不要因为看课而荒废了做题。
            </p>
            <p className="leading-relaxed text-base mt-4">
              4. 老师、UP主的话也不要轻易相信，因为他们的目的是多买课多赚钱，所以他们制造焦虑，你一焦虑就把课或者资料卖给你了。
            </p>
            <p className="leading-relaxed text-base mt-4">
              5. 拒绝完美主义，先完成再完美。大部分学校的大部分专业考个差不多的分数就行，没必要追求完美，追求完美主义要么心态出问题，要么偏科导致单科没过线。
            </p>
            <p className="leading-relaxed text-base mt-4">
              6. 时间安排与优先级：3-9月：数学最高，必须要完成你自己设定的任务，英语（1h）和专业课（2h)学够时间即可，课多可以适当减少。10-12月初 专业课最高，必须要完成你自己设定的任务 ，数学完成每日任务（一套卷子）即可，政治学够时间（1h），英语随缘学一学。12月初-考试  政治和专业课最高，数学每日任务（一套卷子或者半套卷子），英语保持做题手感即可。
            </p>
            <p className="leading-relaxed text-base mt-4">
              7. 什么时候都不晚，很多同学7月甚至9月开始都考上了很好的学校，所以不必太在乎进度，更应该在乎自己会不会。
            </p>

            <div className="h-px w-full bg-gray-200 dark:bg-gray-700 my-10"></div>

            <h2 className="text-2xl font-bold mt-10 mb-6">政治</h2>
            <p className="leading-relaxed text-base">
              这一门是最不重要的一门，过线就好，我考的也不高。这一门的马原好好学一学，其他的多看一看就好。很多每天拿出大量时间的同学甚至没有一点不学的同学考的高。如果你考的是普通院校，大可以放心，日常学习的时候拿学政治放松放松，肖八肖四好好学一学背一背就可以了。985有单科线，还是要认真学一下，我看到小红书的一个考生考的某985，其他科目都考得很高，但是政治听了b站帕拉迪宇的话，11月底才开始，结果没过线，挺可惜的。
            </p>
            <p className="leading-relaxed text-base mt-4">
              我的备考从拿到徐涛的背诵手册开始，马原跟着徐涛强化课过了一遍，史纲、毛中特、思修跟着徐涛前一年的强化班过了一遍，期间用用零碎时间刷了1000题的马原部分，并跟了徐涛的每日一题。小程序的模拟卷出来后，就开始大量刷模拟卷，基本上一天一套做，一套复习，直到开启主观题背诵前，之后就一天做，一天复习。今年的题被肖秀荣说是十年最难，确实，考的比较灵活，所以多深入理解，少表面背诵。
            </p>
            <p className="leading-relaxed text-base mt-4">
              主观题方面，我只背了肖四，拿到肖四后每天大概三小时（实际上得有一半的时间在焦虑，再除去整理打印资料的时间，实际上每天大概能背一个小时），我从小就记性不好，加上背不过的焦虑，连b站up主总结的精简版也没背过，大致只是读熟了，答题思路、比较重要的话和框架有比较深的印象。考前看了看b站上余峰老师的技巧班，主要是客观题的答题技巧和主观题怎么抄材料，还是比较有用的。最后考场上，虽然没背过，但是框框抄材料，也得了个还不错的分数。
            </p>

            <div className="h-px w-full bg-gray-200 dark:bg-gray-700 my-10"></div>

            <h2 className="text-2xl font-bold mt-10 mb-6">英语</h2>
            <p className="leading-relaxed text-base">
              最近考研英语圈除了很多丑闻，很多老师考的还不如我高，作者早就发现这个圈子太草台班子了，在学英语阅读时候，就发现那些老师的方法更像是对着答案讲题，看了几节就没再看了，讲作文的时候更印证了我的猜测，因为上大一的时候，我们的英语老师就是阅卷人，她告诉过我们什么是好作文：1.避免语法错误 2.表达顺畅，没有陈词滥调 3.切题且信息密度大。但是这些考研英语老师给的模版里充满了陈词滥调，信息密度更是差不多为0，能高了就奇怪了。
            </p>
            <p className="leading-relaxed text-base mt-4">
              我先说一下我的基础，四六级一遍过，六级500，但是很久时间没学了，词汇量更是不行。所以在寒假，就找了10天，高强度背单词，每天花5个小时以上，墨墨每天设上500，背的是墨墨的考研词汇重点词，并且近义词和词根词缀也看着。背完这10天之后，基本题干的词汇完全认识了。后边每天墨墨上每天设上100真题词汇，零碎时间快速刷完(每个词汇看到意思就划走)。
            </p>
            <p className="leading-relaxed text-base mt-4">
              至于各小部分的题目的方法论，如上边所说的，老师都太草台班子了，不建议听课浪费时间，实在不行可以去听听b站上的速成课，或者看看笔记。作文的话可以随便找个模版学一下框架（大致要写什么内容），但是表达不要学，要用GPT学，作文也可以用GPT批改。
            </p>
            <p className="leading-relaxed text-base mt-4">
              另外早年真题和近些年的真题风格和难度很不一样，不要被打击到信心，早年真题只用来熟悉题型。我的备考资料只有9.9的英语1、2的真题和电子版的黄皮书。3月份，我开始不分题型，直接做套卷（作文除外），每天1个小时，错的题多琢磨一下，考官是怎么挖坑的，再不行去查一下电子版的黄皮书，不会的词做完之后查会，然后每天复习一下前两天做题不会词汇和错的题目。10月份以后开始是做套卷时写作文，多动笔，心中有一个框架，多写几次自然就会了，没必要刻意背（当然考前几天还是要背一背的）。如果所有题目做完一遍了，重点研究16年以后的题目即可，也要拿英语2或1（自己不考的）练练手，保持做新题的感觉。
            </p>

            <div className="h-px w-full bg-gray-200 dark:bg-gray-700 my-10"></div>

            <h2 className="text-2xl font-bold mt-10 mb-6">数学</h2>
            <p className="leading-relaxed text-base">
              这一门网上太多经验贴了，作者虽然考的不低，就简单分享一下吧。
            </p>
            <p className="leading-relaxed text-base mt-4">
              寒假到5月，用的是24版（据说25版变难了，我用的老版的）张宇的30讲和基础课，做的是300题和880基础篇。
            </p>
            <p className="leading-relaxed text-base mt-4">
              5月到8月中，23版（据说25版变难了，我用的老版的）张宇的27讲和强化课，听课时每次讲一道题，请先暂停思考，看看自己能不能做出来，做27讲课后题和880强化。
            </p>
            <p className="leading-relaxed text-base mt-4">
              8月中到9月中，做余丙森的真题汇总（数123的题都有），穿插二刷张宇的27讲例题和课后题（例题一般都是最重要的题目，并且27讲题型覆盖很全面）。
            </p>
            <p className="leading-relaxed text-base mt-4">
              9月中到考前，刷模拟卷，每天8:30到11:30（大多数试卷用不了3h，做完可以改改错，整理一下错题，大概12点去吃饭），基本上市面上口碑好24和25的都刷了一遍（合工大、李林、余丙森等），太难的如张宇的，就不建议刷了。
            </p>
            <p className="leading-relaxed text-base mt-4">
              其他的就是跟着武忠祥的每日一题，做题不太懂的地方可以去b站看看，现在也可以多问问GPT。虽然我不建议跟b站的那些up主，但是刷刷一些视频（如你的葫芦、夜雨的各种课，3blue1brown的线代，）作为补充还是不错的 。
            </p>

            <div className="h-px w-full bg-gray-200 dark:bg-gray-700 my-10"></div>

            <h2 className="text-2xl font-bold mt-10 mb-6">专业课</h2>
            <p className="leading-relaxed text-base">
              复习的时候也不必盲目背诵，而大纲+理解的形式，也不要过度依赖资料，可以整理出自己的一份大纲或者笔记。天原、动力气象市面上的资料已经很完善了，我整理了一份《大气物理学》的资料，基本知识点都覆盖了，我开源出来，大家可以随意看与修改链接（https://pan.baidu.com/s/1I3ThNjsIJ0QkyWbm36MlkQ?pwd=e9vj）。
            </p>
            <p className="leading-relaxed text-base mt-4">
              3-9月将事无巨细内容过一遍，每学一章把真题对应的内容好好研究。
            </p>
            <p className="leading-relaxed text-base mt-4">
              9-10月，按年份认真研究一个月的真题，研究命题风格和思路，并动手写答案。
            </p>
            <p className="leading-relaxed text-base mt-4">
              10月初-12月初，整理出大纲，根据命题风格和思路，将可能考的和考过的内容在大纲中重点突出。
            </p>
            <p className="leading-relaxed text-base mt-4">
              12月初-考前。对着真题和大纲高强度背诵。
            </p>

            <div className="h-px w-full bg-gray-200 dark:bg-gray-700 my-10"></div>

            <h2 className="text-2xl font-bold mt-10 mb-6">复试</h2>
            <p className="leading-relaxed text-base">
              作者是标准的i人，复试很紧张，很多东西答不上来，声音都是抖的，但是还是得了第一。给我的感觉就是功夫应该用到平时，应该多参加一些科研，导师更看重你在自我介绍中科研经历、展现的能力和本科表现。
            </p>
            <p className="leading-relaxed text-base mt-4">
              我建议大家可以去网上找找你们专业的海外博士招生公告（为什么是海外，国内的没有下边的内容），多找几个，看看这些老师看重什么特质，你要在你自我介绍中潜移默化的提到，需要你会什么工具或者技能，你也学一学并在自我介绍中提一提。再一个就是要真诚，自我介绍中提到的尽量是自己能有比较深入理解的，避免露怯。
            </p>
          </>
        )}
      </article>
    </div>
  )
}

export default GraduateExamExperiencePost 