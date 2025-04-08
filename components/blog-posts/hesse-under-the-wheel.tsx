"use client"

import { useLanguage } from "@/context/language-context"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BookOpen, BookText, School } from "lucide-react"

export function HesseUnderTheWheelPost() {
  const { language } = useLanguage()
  
  // Tag definitions with icons
  const tags = [
    { id: "reading", en: "Reading", zh: "阅读", icon: <BookOpen className="h-4 w-4" /> },
    { id: "philosophy", en: "Philosophy", zh: "哲学", icon: <BookText className="h-4 w-4" /> },
    { id: "education", en: "Education", zh: "教育", icon: <School className="h-4 w-4" /> }
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
              Hermann Hesse&apos;s &quot;Under the Wheel&quot;: Literary Deconstruction and Philosophical Reflections
            </h1>
            
            <div className="flex justify-center mt-2 mb-4">
              <time className="text-muted-foreground text-center">
                March 1, 2025
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
            
            <h2 className="text-2xl font-bold mt-6 mb-6">Abstract</h2>
            <p className="leading-relaxed text-base">
              Hesse&apos;s &quot;Under the Wheel&quot; set against the backdrop of early 20th century German education system, through the tragic life of young Hans Giebenrath, reveals the conflicts between industrial civilization and traditional education, as well as the alienation of human nature. As one of Hesse&apos;s earliest autobiographical works, the novel demonstrates the author&apos;s naturalist writing style and touches on the struggle of human existence in the modern regulatory system. This article analyzes the text structure, social criticism, and existential philosophy from three dimensions, combining Hesse&apos;s Eastern philosophical thinking and German Romantic traditions to explore the profound critique of modern educational systems.
            </p>

            <div className="h-px w-full bg-gray-200 dark:bg-gray-700 my-10"></div>

            <h2 className="text-2xl font-bold mt-12 mb-6">I. The Gallows of the Education System: Hans&apos; Path to Destruction</h2>
            
            <h3 className="text-xl font-bold mt-8 mb-4">(A) The Triple Execution of a Child Prodigy</h3>
            <p className="leading-relaxed text-base">
              Hans Giebenrath&apos;s tragedy begins with the state examination system in Württemberg, Germany. As the son of a low-class merchant, he carries the entire family&apos;s expectations of class mobility. During the &quot;knowledge stuffing&quot; process at the Latin school, his father deprives him of childhood by enforcing &quot;18 hours of study daily,&quot; while the teaching staff alienate Homer&apos;s epics into grammatical dissection. This &quot;educational violence&quot; directly leads to Hans developing neurological headaches—Hesse&apos;s physiological metaphor for knowledge alienation.
            </p>
            <p className="leading-relaxed text-base mt-4">
              After entering the Maulbronn Seminary, the system&apos;s execution enters its second phase. When Hans&apos; grades decline due to his association with the poet Heilner, the principal warns him, &quot;Don&apos;t slacken! Otherwise you&apos;ll fall under the wheel,&quot; alienating personal relationships as obstacles to progress. Hesse reveals the absurd logic of the education system: it requires individuals to become isolated competitive machines while fearing any spiritual connection beyond norms. At this point, Hans has become a &quot;container emptied by knowledge,&quot; with his perfect Greek score hiding a complete loss of vitality.
            </p>
            <p className="leading-relaxed text-base mt-4">
              The final destruction occurs after returning home. When apprentice Hans tries to rebuild meaning through love, the shoemaker&apos;s niece Emma&apos;s departure becomes the last straw. Hesse completes his ultimate judgment of instrumental rationality society with the image of &quot;pale blue autumn night gazing at the cold corpse&quot; when Hans drowns himself—a society that neither tolerates poetic existence nor allows graceful exit from failure.
            </p>
            
            <h3 className="text-xl font-bold mt-8 mb-4">(B) Mechanisms of Educational Violence</h3>
            <p className="leading-relaxed text-base">
              Hesse deconstructs educational violence through three spatial levels: in family space, patriarchal gaze objectifies children as investments; in school space, disciplinary techniques (schedules, ranking systems) create self-monitoring subjects; in social space, occupational discrimination forms closed-loop oppression. This &quot;chain of violence&quot; remains relevant in today&apos;s &quot;involution society&quot;: from school district housing anxiety to &quot;small-town question-solver&quot; dilemmas, Hans&apos; ghost still lingers under the wheels of modern education.
            </p>

            <div className="h-px w-full bg-gray-200 dark:bg-gray-700 my-10"></div>

            <h2 className="text-2xl font-bold mt-10 mb-6">II. Binary Opposition in Naturalistic Narrative</h2>
            
            <h3 className="text-xl font-bold mt-8 mb-4">(A) Mirror Structure of Character Design</h3>
            <p className="leading-relaxed text-base">
              Hans and Heilner constitute Hesse&apos;s &quot;dual self-projection.&quot; Hans represents the disciplined &quot;superego&quot;—pale, obedient, pursuing worldly success; Heilner embodies the repressed &quot;id&quot;—rebellious, poetic, yearning for nature. Their names carry profound implications: Hans originates from Hesse&apos;s deceased brother, bearing real trauma; Heilner (Hermann) shares the author&apos;s name, embodying the ideal self.
            </p>
            <p className="leading-relaxed text-base mt-4">
              This opposition is particularly evident in spatial choices: Hans remains trapped in the rectangular spaces of classrooms/dormitories, while Heilner&apos;s poetry creation always occurs in organic spaces of forests/lakesides. When Heilner finally escapes the seminary, Hesse metaphorizes his spiritual liberation as a &quot;soaring eagle,&quot; in sharp contrast to Hans as &quot;an ant under the wheel.&quot;
            </p>
            
            <h3 className="text-xl font-bold mt-8 mb-4">(B) Philosophical Encoding of Natural Imagery</h3>
            <p className="leading-relaxed text-base">
              Hesse inherits the German Romantic tradition, constructing nature as a redemptive utopia. The recurring Rhine waters in the novel symbolize two forces: for Hans, an abyss of death consuming life; for Heilner, a symbol of freedom cleansing the soul. This contradiction stems from Hesse&apos;s understanding of Taoist &quot;yin-yang coexistence&quot;—nature is both a place of healing and a witness to cruel truth.
            </p>
            <p className="leading-relaxed text-base mt-4">
              Most subversive is the deconstruction of monastery scenes. Religious buildings that should nurture spirituality are alienated into &quot;knowledge concentration camps&quot;: Gothic spire shadows loom over students during morning readings, corridor footsteps form rhythms of mental oppression. Hesse thus subverts Christian tradition, portraying the Maulbronn Seminary as a &quot;wheel wearing a cross,&quot; completing his exposure of religious education&apos;s hypocrisy.
            </p>

            <div className="h-px w-full bg-gray-200 dark:bg-gray-700 my-10"></div>

            <h2 className="text-2xl font-bold mt-10 mb-6">III. Existential Dilemma and Critique of Modernity</h2>
            
            <h3 className="text-xl font-bold mt-8 mb-4">(A) Choice Paradox in Absurd Situations</h3>
            <p className="leading-relaxed text-base">
              Hans&apos; tragedy is essentially a concretization of existential dilemma. When he ranks second in the state exam, the principal praises it as &quot;the path to God&quot;; when he withdraws due to neurasthenia, the same people assert it&apos;s &quot;the devil&apos;s temptation.&quot; This arbitrariness of value judgments confirms Sartre&apos;s proposition that &quot;existence precedes essence&quot;—individual value is entirely defined by others.
            </p>
            <p className="leading-relaxed text-base mt-4">
              Through Hans&apos; death, Hesse raises the core existential question: how does an individual rebuild existential foundation when the social meaning system collapses? Heilner&apos;s answer is &quot;poetic dwelling,&quot; but this path belongs only to spiritual aristocrats in the novel. This limitation reflects the contradiction in Hesse&apos;s early thought: yearning for transcendence while trapped in reality.
            </p>
            
            <h3 className="text-xl font-bold mt-8 mb-4">(B) Operational Logic of the Machinery of Modernity</h3>
            <p className="leading-relaxed text-base">
              The &quot;wheel&quot; metaphor in the novel has multiple signifiers: it represents both the industrialization process of the German Second Empire, the operational mechanism of bureaucratic education systems, and what Heidegger called the &quot;enframing of technology.&quot; When Hans is crushed by the wheel, Hesse essentially prophesies the universal fate of 20th-century humanity—in an efficiency-supreme society, even death must conform to production rhythm (Hans chooses Sunday night for drowning, avoiding disruption to workdays).
            </p>
            <p className="leading-relaxed text-base mt-4">
              This critique remains even more enlightening today. When &quot;securing a position&quot; becomes the new era&apos;s &quot;state examination,&quot; when algorithms replace principals in monitoring every learning segment, Hesse&apos;s warning remains thunderous: any society that reduces people to data will ultimately place poetry and spirituality under the wheel.
            </p>

            <div className="h-px w-full bg-gray-200 dark:bg-gray-700 my-10"></div>

            <h2 className="text-2xl font-bold mt-10 mb-6">IV. Possibility of Redemption from Eastern Philosophical Perspective</h2>
            
            <h3 className="text-xl font-bold mt-8 mb-4">(A) Implicit Penetration of Taoist Thought</h3>
            <p className="leading-relaxed text-base">
              Although &quot;Under the Wheel&quot; is viewed as a work from Hesse&apos;s &quot;Western critique period,&quot; it already contains seeds of Eastern wisdom. Hans&apos; conversation with the old shoemaker after returning home aligns with Zhuangzi&apos;s philosophy of &quot;great use of uselessness&quot;: &quot;The wise man appears like a stupid donkey, yet guards the secrets of beauty.&quot; This affirmation of &quot;non-utilitarian existence&quot; lays groundwork for the Eastern turn in Hesse&apos;s later &quot;Siddhartha.&quot;
            </p>
            
            <h3 className="text-xl font-bold mt-8 mb-4">(B) Narrative Attempts at Zen Enlightenment</h3>
            <p className="pl-5 py-3 border-l-4 border-gray-300 dark:border-gray-600 italic leading-relaxed text-base my-6">
              "He suddenly understood that those nights of hard study, the principal&apos;s reprimands, his father&apos;s expectations, were all as illusory as bubbles on the water&apos;s surface. Only the flowing river is real, moving toward darkness with eternal sighs."
            </p>
            <p className="leading-relaxed text-base">
              This &quot;deathbed awakening,&quot; though unable to change the outcome, suggests Hesse&apos;s path to redemption: only by breaking binary oppositions and realizing life in present experience can one escape the crushing wheel. This thinking develops into a complete system of Eastern wisdom in his later &quot;The Glass Bead Game.&quot;
            </p>

            <div className="h-px w-full bg-gray-200 dark:bg-gray-700 my-10"></div>

            <h2 className="text-2xl font-bold mt-10 mb-6">V. Conclusion: Possibilities Above the Wheel</h2>
            <p className="leading-relaxed text-base">
              The eternal value of &quot;Under the Wheel&quot; lies in its transcendence beyond mere educational criticism, pointing directly to the essential dilemma of modern civilization. What Hesse foresaw in 1906 was not just the tragedy of a child prodigy, but instrumental rationality&apos;s comprehensive colonization of humanity. When we equate &quot;securing a position&quot; with life&apos;s meaning, aren&apos;t we new-era &quot;state exam prisoners&quot;?
            </p>
            <p className="leading-relaxed text-base mt-4">
              Yet the novel also leaves sparks of hope: Heilner&apos;s poetry, the old shoemaker&apos;s wisdom, Hans&apos; final enlightenment, all speak of another possibility—perhaps true redemption lies not in escaping the wheel, but in redefining the direction of progress. In Hesse&apos;s later works, this thought evolved into the existentialist declaration to &quot;become yourself,&quot; with &quot;Under the Wheel&quot; marking the starting point of this spiritual expedition.
            </p>
            <p className="leading-relaxed text-base mt-4">
              As modern readers, we still need to reflect in Hesse&apos;s mirror: when education&apos;s essence degenerates into a competitive tool, when success narratives devour diverse values, perhaps only by guarding inner poetry and resistance can we preserve an inch of free soil for the soul under the era&apos;s wheel.
            </p>
          </>
        ) : (
          <>
            <h1 className="text-4xl font-bold tracking-tight text-center mb-4">
              赫尔曼·黑塞《在轮下》的文学解构与哲学省思
            </h1>
            
            <div className="flex justify-center mt-2 mb-4">
              <time className="text-muted-foreground text-center">
                2025年3月1日
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
            
            <h2 className="text-2xl font-bold mt-6 mb-6">摘要</h2>
            <p className="leading-relaxed text-base">
              赫尔曼·黑塞的《在轮下》以20世纪初德国教育体制为背景，通过少年汉斯·吉本拉特的悲剧性命运，揭示了工业文明与宗教传统双重压迫下的人性异化。作为黑塞早期自传性最强的作品，小说以自然主义笔触描绘了个体在现代性规训中的挣扎，并构建了"顺从与反叛""自然与文明""理性与诗意"的深层二元对立结构。本文从文本结构、社会批判、存在主义哲学三个维度展开分析，结合黑塞的东方哲学思想与德国浪漫主义传统，探讨该作品对现代教育体制的终极叩问。
            </p>

            <div className="h-px w-full bg-gray-200 dark:bg-gray-700 my-10"></div>

            <h2 className="text-2xl font-bold mt-10 mb-6">一、教育体制的绞刑架：汉斯的毁灭之路</h2>
            
            <h3 className="text-xl font-bold mt-8 mb-4">（一）神童陨落的三重绞杀</h3>
            <p className="leading-relaxed text-base">
              汉斯·吉本拉特的悲剧始于德国符腾堡邦的州立考试制度。作为社会底层商人之子，他承载着家族跨越阶层的全部期待。在拉丁文学校的"知识填鸭"过程中，父亲吉本拉特以"每天学习18小时"的强度剥夺其童年，教师群体则将荷马史诗异化为语法分析的尸体解剖。这种"教育暴力"直接导致汉斯出现神经性头痛——这是黑塞对知识异化的生理隐喻。
            </p>
            <p className="leading-relaxed text-base mt-4">
              进入毛尔布隆神学院后，体制的绞杀进入第二阶段。当汉斯因与诗人海尔纳交往导致成绩下滑时，校长以"别松懈！否则会掉到车轮下"的警告，将人际关系异化为进步的阻碍。黑塞在此揭示教育体制的荒谬逻辑：它既要求个体成为孤立的竞争机器，又恐惧任何超越规范的精神联结。此时的汉斯已成为"被知识掏空的容器"，其希腊语满分背后是对生命感受力的彻底丧失。
            </p>
            <p className="leading-relaxed text-base mt-4">
              最终的毁灭发生在返乡后。当钳工学徒汉斯试图通过爱情重建生命意义时，鞋匠侄女爱玛的离去成为压垮骆驼的最后一根稻草。黑塞以汉斯投河时"淡蓝色秋夜凝视冰冷尸体"的意象，完成了对工具理性社会的终极审判——它既不能容忍诗意的生存，也不允许失败的退场。
            </p>
            
            <h3 className="text-xl font-bold mt-8 mb-4">（二）教育暴力的运作机制</h3>
            <p className="leading-relaxed text-base">
              黑塞通过三个空间层级解构教育暴力：家庭空间中的父权凝视将子女物化为投资品；学校空间中的规训技术（作息表、排名制）制造自我监控的主体；社会空间中的职业歧视形成闭环压迫。这种"暴力链条"在当今"内卷社会"仍具现实意义：从学区房焦虑到"小镇做题家"困境，汉斯的幽灵仍在现代教育轮下徘徊。
            </p>

            <div className="h-px w-full bg-gray-200 dark:bg-gray-700 my-10"></div>

            <h2 className="text-2xl font-bold mt-10 mb-6">二、自然主义叙事中的二元对抗</h2>
            
            <h3 className="text-xl font-bold mt-8 mb-4">（一）人物设定的镜像结构</h3>
            <p className="leading-relaxed text-base">
              汉斯与海尔纳构成黑塞式的"双重自我投射"。汉斯代表被规训的"超我"——苍白、顺从、追求世俗成功；海尔纳则是被压抑的"本我"——反叛、诗意、向往自然。两者的名字隐喻深刻：汉斯源自黑塞早逝的弟弟，承载着现实创伤；海尔纳（Hermann）与作者同名，寄寓理想自我。
            </p>
            <p className="leading-relaxed text-base mt-4">
              这种对立在空间选择上尤为显著：汉斯始终被困在教室/宿舍的矩形空间，而海尔纳的诗歌创作总发生在森林/湖畔的有机空间。当海尔纳最终逃离神学院时，黑塞用"展翅雄鹰"比喻其精神解放，与汉斯"车轮下的蚂蚁"形成尖锐对比。
            </p>
            
            <h3 className="text-xl font-bold mt-8 mb-4">（二）自然意象的哲学编码</h3>
            <p className="leading-relaxed text-base">
              黑塞继承德国浪漫派传统，将自然建构为救赎的乌托邦。小说中反复出现的莱茵河水喻示两种力量：对汉斯是吞噬生命的死亡之渊，对海尔纳则是洗涤灵魂的自由象征。这种矛盾性源于黑塞对道家"阴阳共生"思想的理解——自然既是疗愈之所，也是残酷真相的见证者。
            </p>
            <p className="leading-relaxed text-base mt-4">
              最具颠覆性的是修道院场景的解构。本应孕育灵性的宗教建筑，在小说中异化为"知识集中营"：哥特式尖顶投射的阴影笼罩着晨读的学生，回廊脚步声形成精神压迫的节奏。黑塞以此颠覆基督教传统，将毛尔布隆神学院描绘成"戴着十字架的轮子"，完成对宗教教育虚伪性的揭露。
            </p>

            <div className="h-px w-full bg-gray-200 dark:bg-gray-700 my-10"></div>

            <h2 className="text-2xl font-bold mt-10 mb-6">三、存在主义困境与现代性批判</h2>
            
            <h3 className="text-xl font-bold mt-8 mb-4">（一）荒诞境遇中的选择悖论</h3>
            <p className="leading-relaxed text-base">
              汉斯的悲剧本质上是存在主义困境的具象化。当他在州试中获得第二名时，校长称赞"这是通向上帝之路"；而当他因神经衰弱退学时，同一批人断言"这是魔鬼的诱惑"。这种价值评判的随意性，印证了萨特"存在先于本质"的论断——个体的价值完全由他者定义。
            </p>
            <p className="leading-relaxed text-base mt-4">
              黑塞通过汉斯的死亡提出了存在主义的核心命题：当社会意义体系崩溃后，个体如何重建生存依据？海尔纳给出的答案是"诗意栖居"，但这条路在小说中仅属于精神贵族。这种局限性反映了黑塞早期思想的矛盾：既渴望超越，又困于现实。
            </p>
            
            <h3 className="text-xl font-bold mt-8 mb-4">（二）现代性机器的运转逻辑</h3>
            <p className="leading-relaxed text-base">
              小说中的"轮子"隐喻具有多重能指：既是德意志第二帝国的工业化进程，也是科层制教育体系的运转机制，更是海德格尔所说的"技术座架"。当汉斯被轮子碾压时，黑塞实际上预言了20世纪人的普遍命运——在效率至上的社会中，连死亡都需符合生产节拍（汉斯选择周末夜投河，避免影响工作日）。
            </p>
            <p className="leading-relaxed text-base mt-4">
              这种批判在当今更具启示性。当"上岸"成为新时代的"邦试"，当算法替代校长监控每个学习时段，黑塞的警告依然振聋发聩：任何将人简化为数据的社会，终将把诗意与灵性置于轮下。
            </p>

            <div className="h-px w-full bg-gray-200 dark:bg-gray-700 my-10"></div>

            <h2 className="text-2xl font-bold mt-10 mb-6">四、东方哲学视野下的救赎可能</h2>
            
            <h3 className="text-xl font-bold mt-8 mb-4">（一）道家思想的隐性渗透</h3>
            <p className="leading-relaxed text-base">
              尽管《在轮下》被视为黑塞"西方批判时期"的作品，但其中已蕴含东方智慧的火种。汉斯返乡后与老鞋匠的对话，暗合庄子"无用之大用"的哲学："智者看起来像笨驴，却能守护美的奥秘"。这种对"非功利性生存"的肯定，为后来《悉达多》中的东方转向埋下伏笔。
            </p>
            
            <h3 className="text-xl font-bold mt-8 mb-4">（二）禅宗顿悟的叙事尝试</h3>
            <p className="pl-5 py-3 border-l-4 border-gray-300 dark:border-gray-600 italic leading-relaxed text-base my-6">
              "他忽然明白，那些苦读的夜晚、校长的训斥、父亲的期待，都像水面的泡沫般虚幻。唯有河水的流动是真实的，带着永恒的叹息流向黑暗。"
            </p>
            <p className="leading-relaxed text-base">
              这种"临终觉醒"虽未能改变结局，却暗示了黑塞的救赎路径：只有打破二元对立，在当下体验中证悟生命，才能逃离轮子的碾压。这种思想在后期《玻璃珠游戏》中发展为完整的东方智慧体系。
            </p>

            <div className="h-px w-full bg-gray-200 dark:bg-gray-700 my-10"></div>

            <h2 className="text-2xl font-bold mt-10 mb-6">五、结语：轮子之上的可能性</h2>
            <p className="leading-relaxed text-base">
              《在轮下》的永恒价值，在于它超越了单纯的教育批判，直指现代文明的本质困境。黑塞在1906年预见的，不仅是某个神童的悲剧，更是工具理性对人性全方位的殖民。当我们将"上岸"等同于生存意义时，何尝不是新时代的"邦试囚徒"？
            </p>
            <p className="leading-relaxed text-base mt-4">
              但小说也留下了希望的火种：海尔纳的诗歌、老鞋匠的智慧、汉斯最后的顿悟，都在诉说另一种可能——或许真正的救赎，不在于逃离轮子，而在于重新定义前进的方向。在黑塞后期作品中，这种思想升华为"成为你自己"的存在主义宣言，而《在轮下》正是这场精神远征的起点。
            </p>
            <p className="leading-relaxed text-base mt-4">
              作为现代读者，我们仍需在黑塞的镜鉴中反思：当教育的本质沦为竞争工具，当成功学叙事吞噬多元价值，或许唯有守护内心的诗意与反抗，才能在时代的车轮下，为灵魂保留一寸自由的土地。
            </p>
          </>
        )}
      </article>
    </div>
  )
}

export default HesseUnderTheWheelPost 