"use client"

import { useLanguage } from "@/context/language-context"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BookOpen, BookText, Film, School } from "lucide-react"

export function SuzhouRiverPost() {
  const { language } = useLanguage()
  
  // Tag definitions with icons
  const tags = [
    { id: "film", en: "Film", zh: "电影", icon: <Film className="h-4 w-4" /> },
    { id: "philosophy", en: "Philosophy", zh: "哲学", icon: <BookText className="h-4 w-4" /> },
    { id: "shanghai", en: "Shanghai", zh: "上海", icon: <School className="h-4 w-4" /> }
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
            <h1 className="flex flex-col items-center text-center mb-4">
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
                Artistic Analysis, Social
              </span>
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
                Interpretation and Contemporary
              </span>
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
                Significance of the Film "Suzhou River"
              </span>
            </h1>
            
            <div className="flex justify-center mt-2 mb-4">
              <time className="text-muted-foreground text-center">
                May 15, 2025
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
              Suzhou River (1999/2000), directed by Lou Ye, is one of his signature works and widely regarded as a hallmark of China's sixth-generation cinema. The film won the Tiger Award at the Rotterdam International Film Festival but was banned domestically due to attending foreign festivals without prior approval, sparking discussions on the relationship between Chinese film censorship and artistic expression. Set against the backdrop of contemporary Shanghai, the narrative intertwines two seemingly parallel love stories, painting a complex and captivating urban portrait.
            </p>
            <p className="leading-relaxed text-base mt-4">
              This article conducts an in-depth analysis of the film's artistic techniques, social reflections, real-world significance, and symbolic character meanings. The film's international acclaim alongside its domestic ban embodies the tension between official control and avant-garde cinematic innovation. Lou Ye's bold challenge to restrictions also hints at explorations of marginal groups and social transformation. Additionally, the ambiguous identities of Meimei and Moudan invite multilayered interpretations. Zhou Xun's dual roles further provide profound insights into identity, memory, and the essence of love.
            </p>

            <div className="h-px w-full bg-gray-200 dark:bg-gray-700 my-10"></div>

            <h2 className="text-2xl font-bold mt-12 mb-6">Deconstructing the Narrative Artistry of Suzhou River</h2>
            
            <h3 className="text-xl font-bold mt-8 mb-4">1. The Unreliable Invisible Narrator</h3>
            <p className="leading-relaxed text-base">
              The most striking narrative feature is the use of a concealed, ambiguously-identified cameraman, who narrates in the first person. The story unfolds largely, if not entirely, from his perspective, as he recounts his relationship with bar performer Meimei and interweaves the tale of Mada and Moudan, forming a 'colored filter' through which the audience perceives events.
            </p>
            <p className="leading-relaxed text-base mt-4">
              His storytelling carries strong subjective imagination — "Let me think… perhaps it was like this? Maybe that way instead?" — blurring the boundaries between fiction and reality, memory and fact. As a videographer, his professional pursuit of "objective documentation" clashes with his deeply personal narration. The film's claim that "the camera never lies" is itself questioned by this narrative structure. The cameraman's account creates a hallucinatory "story within a story," emphasizing its inherent unreliability.
            </p>
            
            <h3 className="text-xl font-bold mt-8 mb-4">2. A Visually Tactile Style</h3>
            <p className="leading-relaxed text-base">
              The film adopts a raw visual language characterized by handheld cinematography and the gritty texture of 16mm film. Shaky, intimate shots immerse viewers in the streets of Shanghai, capturing the characters' unsettled psyche and sense of drifting. This grainy, low-budget aesthetic aligns with the sixth-generation directors' preference for independence, improvisation, and anti-commercialism.
            </p>
            <p className="leading-relaxed text-base mt-4">
              Its visual style is evidently influenced by Wong Kar-wai's works (such as Chungking Express). Though primarily filmed on celluloid, digital imagery concepts intertwine throughout, showcasing a fusion and challenge between contemporary technology and cinematic language. This postmodern collage yields a rich, multilayered visual experience that resonates with the themes of urban wanderings and the haze of memory.
            </p>

            <h3 className="text-xl font-bold mt-8 mb-4">3. The Interplay of Image and Sound</h3>
            <p className="leading-relaxed text-base">
              The lighting constructs a neo-noir atmosphere of ambiguity, deepening themes of anxiety and descent. The music references Hitchcock's Vertigo, evoking imagery of identity confusion and obsessive love. Sound and imagery intertwine, reinforcing the narrative's emotional tension. Nostalgic color grading blends glimpses of old Shanghai with modern cityscapes, enriching the film's historical layers.
            </p>

            <div className="h-px w-full bg-gray-200 dark:bg-gray-700 my-10"></div>

            <h2 className="text-2xl font-bold mt-10 mb-6">Shanghai: A Mirror of Social Transformation</h2>
            
            <h3 className="text-xl font-bold mt-8 mb-4">1. Capturing Marginal Spaces</h3>
            <p className="leading-relaxed text-base">
              Set amid the dramatic upheaval of 1990s Shanghai, the film portrays mist-shrouded districts, rushing workers, prowling criminals, and dilapidated colonial architecture—all in stark contrast to today's glamorous urbanscape. It focuses on the decaying factories, warehouses, and marginalized communities along the Suzhou River—forgotten corners amid modernization, "gaps in history" swallowed by progress.
            </p>
            <p className="leading-relaxed text-base mt-4">
              Lou Ye's "rough yet dreamlike" portrayal reveals Shanghai's transformation—from a cradle of youthful artistry to a vortex of demolition and construction. The courier biker, nightclub mermaid, drifters, and the cameraman all hover on the city's periphery, embodying abandonment, alienation, and fragmented emotions, questioning the true cost of rapid development.
            </p>
            
            <h3 className="text-xl font-bold mt-8 mb-4">2. The Suzhou River as Multifaceted Metaphor</h3>
            <p className="leading-relaxed text-base">
              The Suzhou River is both a physical entity and a symbolic space. "Bearing a century's worth of tales and trash," it is known as Shanghai's "dirtiest river," chronicling the city's splendor and decay. It represents historical residue as well as the complex layering of memory, serving as an enduring witness amid ceaseless transformation.
            </p>
            <p className="leading-relaxed text-base mt-4">
              Its waters encompass beauty and filth, reality and illusion, life and death. Its flow evokes the impermanence and drifting of both the metropolis and individual fate, connecting personal stories with grand urban shifts. The Suzhou River thus becomes a metaphorical current across time and narrative, carrying limitless allegory.
            </p>

            <div className="h-px w-full bg-gray-200 dark:bg-gray-700 my-10"></div>

            <h2 className="text-2xl font-bold mt-10 mb-6">The Timeless Echoes of Suzhou River</h2>
            
            <h3 className="text-xl font-bold mt-8 mb-4">1. Universal Motifs Beyond Nations and Eras</h3>
            <p className="leading-relaxed text-base">
              The film transcends its contemporary setting by invoking eternal questions of love, identity, obsession, and loss. Mada's clinging to a lost lover mirrors a fundamental human reluctance to let go of past emotions. The duality of Meimei and Moudan, intertwined with the elusive cameraman, probes the tangled nature of identity and elusive truth—sentiments universal across cultures.
            </p>
            
            <h3 className="text-xl font-bold mt-8 mb-4">2. Narrative Ambiguity amid the Information Age</h3>
            <p className="leading-relaxed text-base">
              The film's multi-layered narrative and unreliable narration foreshadow today's flood of information with blurred realities. The notion that "the camera never lies" is subverted by fragmented storytelling, compelling audiences to question the authenticity of images and information. Such skepticism resonates profoundly in our era rife with misinformation.
            </p>
            
            <h3 className="text-xl font-bold mt-8 mb-4">3. A Creative Milestone in Independent Chinese Cinema</h3>
            <p className="leading-relaxed text-base">
              Beyond capturing a transformative moment in Chinese society, Suzhou River enters a global cinematic dialogue by blending noir aesthetics, Wong Kar-wai's urban lyricism, and Hitchcockian suspense. It symbolizes sixth-generation directors' low-budget rebellious spirits, inspiring future filmmakers to focus on city life, marginalized voices, and experimental narrative forms.
            </p>

            <div className="h-px w-full bg-gray-200 dark:bg-gray-700 my-10"></div>

            <h2 className="text-2xl font-bold mt-10 mb-6">Symbolic Readings of the Four Main Characters</h2>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-300 dark:divide-gray-700 my-6">
                <thead>
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Character</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">Potential Symbolism</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                  <tr>
                    <td className="px-4 py-4 text-sm font-medium">Mada</td>
                    <td className="px-4 py-4 text-sm">Working-class strugglers; romantic idealism; obsession with lost love; search for self; an idealized mirror of the narrator; resilience</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-sm font-medium">Moudan</td>
                    <td className="px-4 py-4 text-sm">Lost innocence and hope; archetype of the ideal woman; Little Mermaid imagery; fragility of dreams; collision of fantasy and harsh reality</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-sm font-medium">Meimei</td>
                    <td className="px-4 py-4 text-sm">Substitute persona; symbol of urban temptation and illusion; fluid female identity; volatility of relationships; yearning for ideal being</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-sm font-medium">Cameraman</td>
                    <td className="px-4 py-4 text-sm">The recorder and director's alter ego; embodiment of unreliable memory; a cold city observer; embodied weariness toward cycles of love and loss; voyeuristic ethics metaphor</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <p className="leading-relaxed text-base">
              Mada symbolizes the everyday laborer struggling at society's margins, a resilient romantic haunted by lost love and in search of self, even serving as an idealized projection of the narrator himself. Moudan embodies lost innocence, fragile hope, and the doomed Little Mermaid's yearning for transformation—the collapse of pure ideals before reality. Meimei, as a substitute, blurs lines between illusion and reality, past and present, reflecting fleeting urban temptations and fluid identities. The cameraman merges director and audience perspectives, guiding yet unreliable, questioning the veracity of images and ethical implications of voyeurism.
            </p>

            <div className="h-px w-full bg-gray-200 dark:bg-gray-700 my-10"></div>

            <h2 className="text-2xl font-bold mt-10 mb-6">Director's Intentions and Audience Interpretations</h2>
            <p className="leading-relaxed text-base">
              Lou Ye noted his use of the first-person narrative aimed "to place himself inside the story." The film originated from his documentary impulse to capture the Suzhou River, gradually evolving character and plot. Lou's longstanding focus on women's experiences and censorship pressures further shape the film's themes and perspective.
            </p>
            <p className="leading-relaxed text-base mt-4">
              Critics highly praised Zhou Xun's exceptional performance in dual roles, highlighting the film's synthesis of Wong Kar-wai's lyrical urbanism, Hitchcockian obsession, and noir elements. Many regard it as an allegory of China's social transformations and a profound meditation on the interplay between memory, reality, and fictional storytelling. Internationally, Suzhou River earned acclaim for its innovative structure and emotional depth.
            </p>

            <div className="h-px w-full bg-gray-200 dark:bg-gray-700 my-10"></div>

            <h2 className="text-2xl font-bold mt-10 mb-6">Conclusion</h2>
            <p className="leading-relaxed text-base">
              Through innovative narrative forms and textured visual language, Suzhou River insightfully depicts the complexities of Shanghai's social transition at the turn of the century, focusing on the plight and psyche of marginalized urban dwellers. The film probes obsession, identity, and blurred lines between fiction and reality, carrying timeless social resonance. The intertwined symbolism of its four key characters weaves an urban allegory of love, disillusionment, and pursuit amid modern life.
            </p>
            <p className="leading-relaxed text-base mt-4">
              As a landmark sixth-generation Chinese film, Suzhou River sparked controversy upon release but remains a rich subject for scholars and cinephiles alike, provoking ongoing reflections on urban existence, human connections, and the very nature of cinematic storytelling.
            </p>
          </>
        ) : (
          <>
            <h1 className="flex flex-col items-center text-center mb-4">
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
                电影《苏州河》的艺术赏析、
              </span>
              <span className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
                社会解读与现实意义
              </span>
            </h1>
            
            <div className="flex justify-center mt-2 mb-4">
              <time className="text-muted-foreground text-center">
                2025年5月15日
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
              《苏州河》（1999/2000），导演娄烨的代表作，也被视为中国第六代电影的标志之一。该片获鹿特丹国际电影节金虎奖，却因未经审查赴展在中国大陆遭禁映，引发了对中国电影审查制度与艺术表达关系的关注。影片以现代上海为背景，交织两条貌似平行的爱情线索，勾画出一幅复杂而引人入胜的都市图景。
            </p>
            <p className="leading-relaxed text-base mt-4">
              本文将对这部影片的艺术手法、社会镜像、现实意义及人物象征意义进行深入分析。影片被国际认可而国内禁映，本身便体现了中国电影管理与艺术先锋性的矛盾。导演娄烨挑战既定规制的创作策略，或许也暗示了边缘群体与社会转型等先锋议题的表达。此外，美美与牡丹身份之谜的叙述设计，提示观众需进行多层次的阐释。周迅一人分饰两角，更蕴含着对身份、记忆和爱情本质的深刻观察。
            </p>

            <div className="h-px w-full bg-gray-200 dark:bg-gray-700 my-10"></div>

            <h2 className="text-2xl font-bold mt-12 mb-6">解构《苏州河》的叙事艺术</h2>
            
            <h3 className="text-xl font-bold mt-8 mb-4">1. 不可靠的隐形叙述者</h3>
            <p className="leading-relaxed text-base">
              最鲜明的叙事特点，是由一名隐匿、身份暧昧的摄影师，以第一人称主导讲述。故事"很大程度上，也许完全"发生在他的视角之中。他讲述自己与酒吧表演者美美的关系，同时穿插马达与牡丹的爱情故事，成为观众理解的一扇"有色滤镜"。
            </p>
            <p className="leading-relaxed text-base mt-4">
              他的叙述带有主观想象成分："让我想想……也许是这样？也许那样？"，营造出虚构与现实、记忆与事实的模糊边界。作为摄像工作者，他职业上的"客观记录"也与叙述过程的主观性发生冲突。影片中那句"摄像机不会撒谎"，也被故事自身的结构所质疑。摄影师的讲述产生了"故事中的故事"的迷幻感，强调叙述的不可靠性。
            </p>
            
            <h3 className="text-xl font-bold mt-8 mb-4">2. 充满躯体感的视觉风格</h3>
            <p className="leading-relaxed text-base">
              影片采用以手持摄影和粗粝16毫米胶片质感为特征的视觉语言。晃动不稳的镜头直接置身于上海街头，近距离捕捉人物的心理，增强了生活的不安与漂泊感。这种以低成本实现的颗粒朦胧美感，契合第六代导演崇尚独立、即兴、反商业化的美学。
            </p>
            <p className="leading-relaxed text-base mt-4">
              视觉风格也明显受到王家卫电影（如《重庆森林》）的影响。影片虽主要用胶片拍摄，数字影像的概念也于其中交汇，表现出现代技术对电影语言的冲击与融合。这种后现代拼贴创造了晦涩而多义的视觉体验，与都市漂泊、记忆模糊感相呼应。
            </p>

            <h3 className="text-xl font-bold mt-8 mb-4">3. 视觉与声音的互文</h3>
            <p className="leading-relaxed text-base">
              灯光营造了一种黑色电影（neo-noir）式的暧昧氛围，深化焦虑与沉沦的主题。配乐借鉴希区柯克《迷魂记》（Vertigo），唤起关于身份错觉与爱情痴迷的意象。声音和画面交织，共同增强叙事张力。影像的怀旧调色带出老上海与现代城景的交融，深化影片的历史深度。
            </p>

            <div className="h-px w-full bg-gray-200 dark:bg-gray-700 my-10"></div>

            <h2 className="text-2xl font-bold mt-10 mb-6">上海：社会转型的镜子</h2>
            
            <h3 className="text-xl font-bold mt-8 mb-4">1. 边缘空间的捕捉</h3>
            <p className="leading-relaxed text-base">
              影片背景设在90年代社会剧变的上海。画面中晨雾弥漫的城区，工人匆忙，罪犯游荡，殖民建筑颓败，与今日繁华摩登的都市景观形成对比。故事聚焦于苏州河沿岸破败的工厂、仓库，以及边缘化人群。这些场域象征着城市发展中的被遗忘角落，是现代化浪潮下的"历史夹缝"。
            </p>
            <p className="leading-relaxed text-base mt-4">
              娄烨用"粗犷而幻想"的笔触描绘着上海：曾经孕育青年艺术的圣地，如今变为拆迁与建设的漩涡。摩托快递员、夜总会美人鱼、流浪小混混、摄影师——他们都处在现代化边缘。影片透视了这些个体的被抛弃感、城市疏离与情感的碎片化，质询急剧发展背后的社会代价。
            </p>
            
            <h3 className="text-xl font-bold mt-8 mb-4">2. 苏州河的多重象征</h3>
            <p className="leading-relaxed text-base">
              苏州河既是物理存在，也是隐喻空间。它"承载着一个世纪的故事与垃圾"，被视为上海"最肮脏的河"，记录城市的辉煌与衰败。它既象征历史遗存，也代表记忆的复杂性，是上海不断流变中的不变见证者。
            </p>
            <p className="leading-relaxed text-base mt-4">
              河水包罗包容美丽与污秽，现实与梦境，生与死。它的流动暗示城市及个体命运的无常和漂泊，联系了个人情事与宏大都市变迁。苏州河成为跨越时间与叙述的隐喻之河，承载无尽寓言。
            </p>

            <div className="h-px w-full bg-gray-200 dark:bg-gray-700 my-10"></div>

            <h2 className="text-2xl font-bold mt-10 mb-6">《苏州河》的时代回响</h2>
            
            <h3 className="text-xl font-bold mt-8 mb-4">1. 超越国别的永恒命题</h3>
            <p className="leading-relaxed text-base">
              影片超越特定时代，唤起关于爱情、身份、痴迷、失落的永恒主题。马达对逝去恋人的执着，折射人类难舍旧日情感的本能。美美、牡丹双重形象及摄影师的若隐若现，探讨了身份的复杂性与真实的难觅。这种情感困境跨越文化，易引发观众共鸣。
            </p>
            
            <h3 className="text-xl font-bold mt-8 mb-4">2. 信息时代的叙事疑惑</h3>
            <p className="leading-relaxed text-base">
              影片的多义叙事、不可信讲述，预示着网络时代真假难辨的景观。摄像机的"不会撒谎"说，被不断破碎的叙事捉弄，迫使观众质疑"影像真相"及信息可信度。在"信息泛滥"、"造假频发"的今天，这种质疑尤为现实。
            </p>
            
            <h3 className="text-xl font-bold mt-8 mb-4">3. 独立电影的创新坐标</h3>
            <p className="leading-relaxed text-base">
              影片不仅刻录了变革时期的中国，也融入了世界电影对话。其风格融合黑色电影、王家卫的都市浪漫、希区柯克式悬疑，成为第六代电影低成本反叛精神的象征，并激励后来电影人关注城市、社会与叙事实验。
            </p>

            <div className="h-px w-full bg-gray-200 dark:bg-gray-700 my-10"></div>

            <h2 className="text-2xl font-bold mt-10 mb-6">四位核心角色的象征意义</h2>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-300 dark:divide-gray-700 my-6">
                <thead>
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold">角色</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold">潜在象征意义</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                  <tr>
                    <td className="px-4 py-4 text-sm font-medium">马达</td>
                    <td className="px-4 py-4 text-sm">现代上海挣扎的工人阶级；浪漫理想主义；对逝去爱情的痴迷；身份的寻找；叙述者的理想化镜像；坚韧不拔</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-sm font-medium">牡丹</td>
                    <td className="px-4 py-4 text-sm">死去的纯真与希望；理想女性原型；小美人鱼意象；梦想的脆弱与短暂；浪漫幻想与现实幻灭</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-sm font-medium">美美</td>
                    <td className="px-4 py-4 text-sm">替身角色；都市虚假诱惑象征；女性身份流动多变；关系的易逝性；对理想生命状态的渴望</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-sm font-medium">摄影师</td>
                    <td className="px-4 py-4 text-sm">记录者、导演的影子；不可靠记忆的象征者；城市的冷漠旁观者；对爱情与失落循环的厌倦；窥视欲、表现伦理的隐喻</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <p className="leading-relaxed text-base">
              马达象征着在社会夹缝中生存的普通劳动者与痴情理想主义者。牡丹兼具"理想情人"与美好幻象的破灭，亦如受苦美人鱼般渴望变化。美美作为替身，将现实与虚幻、过去与现在模糊化，映照都市的空虚诱惑和身份流转。摄影师则融合导演/观众视角，不可靠却引导叙事，对影像真实性提出质问。
            </p>

            <div className="h-px w-full bg-gray-200 dark:bg-gray-700 my-10"></div>

            <h2 className="text-2xl font-bold mt-10 mb-6">导演意图与观众解读</h2>
            <p className="leading-relaxed text-base">
              娄烨曾表示，选择第一人称叙事，是试图"将自己置入故事之中"。影片起源于拍摄苏州河的愿景，角色和剧情逐步衍生。最早甚至尝试过纪录片式表达。娄烨一贯关注女性处境和审查压力，这些背景为影片的视角和主题提供了线索。
            </p>
            <p className="leading-relaxed text-base mt-4">
              评论界高度评价周迅一人分饰两角的绝妙演技，指出影片融合王家卫的诗意都市、希区柯克的悬疑痴迷，以及黑色电影类型元素。影评认为，这是一部关于中国社会剧变的寓言，也是对记忆、现实和虚构交织关系的深刻思考。国际上，《苏州河》也因其创新叙事和情感深度获得高度评价。
            </p>

            <div className="h-px w-full bg-gray-200 dark:bg-gray-700 my-10"></div>

            <h2 className="text-2xl font-bold mt-10 mb-6">结论</h2>
            <p className="leading-relaxed text-base">
              《苏州河》以革新叙事结构、富有质感的影像语言，深刻展现出世纪之交上海社会转型的复杂现实，聚焦被忽视的都市边缘群体的困境与心理。这部影片探讨痴迷、身份、虚构与真实的边界，具有跨越时代的现实意义。四位人物的象征意义交织出关于现代都市爱情、幻灭与追寻的寓言。
            </p>
            <p className="leading-relaxed text-base mt-4">
              作为第六代导演代表作，《苏州河》不只在当时引发轰动，今天依然值得学界和影迷深入挖掘，持续激发对都市生活、人际关系及影像叙事本质的思考。
            </p>
          </>
        )}
      </article>
    </div>
  )
}

export default SuzhouRiverPost 