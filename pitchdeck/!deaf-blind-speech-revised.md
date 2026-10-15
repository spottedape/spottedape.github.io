#
# The Deaf Leading the Blind — YouTube Talk Script
### Based on: "The Deaf Leading the Blind: What Silicon Valley's LLMs Cannot See"

---

HOST:

(relaxed, leaning forward slightly)

So I want to talk about something that's been sitting with me for a while now.

There's a big claim floating around in the tech world.

That AI can *see*.

Not just process images —

but actually *see*.

 I think... it's maybe worth slowing down on that one.

I recently watched an old film again with 80's comedian Richard Pryor.

It gave me an interesting way in how to approach vision and AI.

---

### SECTION 1 — WALLY AND DAVE

HOST:

The film is called *See No Evil, Hear No Evil*.

1989. Richard Pryor and Gene Wilder.

It's a comedy — a murder mystery —

and the premise is simple.

Richard Pryor plays *Wally* — completely blind.

Gene Wilder plays *Dave* — completely deaf.

And somehow, together, they have to solve a crime.

---

HOST:

Now here's what makes it funny — and also, weirdly, quite insightful.

From the outside, they look like one capable person.

Wally strides confidently into a bar brawl.

Dave is shouting directions — "Left! Duck! Watch out!"

Wally borrows Dave's eyes.

Dave borrows Wally's ears.

---

HOST:

(smiling)

And somehow they muddle through.

But neither of them actually has the faculty the other is lending them.

They're *performing* competence.

The comedy turns entirely on that gap —

between what they *appear* able to do...

and what they can actually perceive.

---

HOST:

(beat)

That gap?

That's where modern AI lives.

---

### SECTION 2 — THE WALLY PROBLEM

HOST:

When you upload a photo to an AI chatbot,

there are essentially two parts working together.

A visual system that processes the image —

and a language model that does the talking.

---

**[VISUAL: simple pipeline — Image → Visual Encoder → Tokens → Language Model → Response]**

---

HOST:

And here's the thing.

The language model — the "brain" part —

cannot actually understand images.

It's fundamentally and stubbornly a text system.

---

HOST:

So what happens?

The image gets converted into words first.

Into *tokens*.

Then the language model reads those tokens and responds.

---

HOST:

(leans forward)

So it's not seeing your photo.

It's reading a description of your photo.

And then talking confidently about that description.

---

HOST:

That's the Wally problem.

Vision, for most of these AI systems, is not perception.

It's *narration*.

---

HOST:

When things are simple — good lighting, familiar objects —

it works well enough.

Because the translation from image to words is easy.

The system has seen millions of similar examples.

---

HOST:

But the moment things get complicated —

unusual angles, cluttered scenes, anything that actually requires *reasoning* about space —

the wheels come off.

---

HOST:

And here's the part that should give you pause.

When the AI isn't sure, it doesn't say "I don't know."

It guesses.

Confidently.

---

HOST:

Because it's trained on patterns of language.

It knows what *usually* appears in a kitchen.

So if it sees something vaguely kitchen-like,

it might tell you there's a microwave on the counter.

---

**[VISUAL: empty counter corner — AI label reads "microwave"]**

---

HOST:

Even if there isn't one.

---

HOST:

(quietly)

It's not seeing reality.

It's predicting what *should* be there.

Researchers have a polite name for this.

They call it "relying on linguistic priors."

I'd call it: *Wally walking confidently into a bar fight he cannot see.*

---

### SECTION 3 — "BUT WHAT ABOUT TESLA?"

HOST:

Now — someone's always going to raise this.

If AI can't see, how is a two-tonne car

negotiating a busy intersection on its own?

Fair question.

---

HOST:

But the answer is interesting.

Tesla's system doesn't work like a chatbot.

It doesn't convert what the camera sees into words first.

It goes straight from pixels to action —

steering, braking, speed.

No narration. No language step. Just maths and movement.

---

**[VISUAL: pipeline comparison — chatbot: Camera → Words → Response | Tesla: Camera → Direct Action]**

---

HOST:

(smiling slightly)

Which means, in our film analogy —

Dave didn't fix the problem.

He just quietly removed Wally from the vehicle.

The blind man isn't there anymore.

So there's nobody to mislead.

---

HOST:

That's a workaround. Not a solution.

And Silicon Valley's general-purpose models —

the chatbots, the assistants —

still have that language bottleneck firmly in place.

---

### SECTION 4 — WHAT ABOUT THOSE BEAUTIFUL AI IMAGES?

HOST:

Right, but what about tools like Midjourney?

You've seen the images.

Perfect light. Convincing shadows.

Physics that *looks* right.

---

**[VISUAL: AI-generated cinematic glass of wine, dramatic lighting]**

---

HOST:

Surely that means AI understands vision?

---

HOST:

(shakes head)

Not quite.

What it's mastered is what you could call the *aesthetics of plausibility*.

Through enormous amounts of human feedback,

it's learned the statistical grammar of what humans find beautiful.

The precise combination of pixels that we label "convincing."

---

HOST:

But it doesn't know that glass shatters.

It doesn't know that wine is liquid.

It doesn't understand refraction — it's just learned where shadows *tend* to fall

in images that humans approved of.

---

HOST:

It's a bit like Wally, later in the film,

discovering he's become a rather convincing *actor*.

Which is not the same thing as having recovered his sight.

---

HOST:

The results are often genuinely beautiful.

But beautiful is not the same as *accurate*.

And in any situation where spatial truth actually matters,

those two things are very different.

---

### SECTION 5 — WHERE IT ACTUALLY MATTERS

HOST:

Here's where it stops being abstract.

Researchers recently tested leading AI systems

on scientific tasks — the kind that require you to

look at a diagram, understand its spatial structure,

and reason about what it's showing you.

---

HOST:

Across the board, these state-of-the-art systems

scored around thirty percent.

The vocabulary was fine.

The perception was essentially absent.

---

HOST:

Wally, it turns out, knows all the right words for a bar fight.

He just can't see where the punches are coming from.

---

HOST:

(more serious)

And then there's the accessibility problem.

Engineers building tools for blind and low-vision users

have found that AI-assisted visual description

falls apart on exactly the information those users need most.

Spatial structure.

Where is this annotation relative to that diagram?

Which cluster belongs to which label?

---

HOST:

The visual grammar of how things are *arranged* —

proximity, grouping, position —

that's semantic information.

And it evaporates in translation.

---

HOST:

(quietly)

Asking Wally to give directions has consequences

that go well beyond a punchline.

---

### SECTION 6 — WHERE IT'S HEADING

HOST:

To be fair, the field isn't completely ignoring this.

There's a growing push to build AI that reasons

*visually* — natively, in image space —

rather than routing everything through language first.

Thinking *with* images, rather than *about* them.

---

HOST:

Whether that turns out to be a genuine fix,

or just a more sophisticated performance of sight,

is genuinely still an open question.

---

### CLOSING

HOST:

(relaxed, direct)

So next time you see an AI demo

that looks like magic —

---

HOST:

just remember what's actually happening underneath.

In most cases, it's not seeing the world.

It's receiving a description of the world...

and talking confidently from that.

---

HOST:

It's Dave shouting directions.

And Wally striding forward like he owns the place.

---

HOST:

(smiling)

Which — honestly — sometimes works out fine.

Until it doesn't.

---

HOST:

Let me know in the comments —

do you trust AI to actually *see*, or not?

Because the more you understand what's happening under the hood,

the better placed you are to use these tools well.

---

HOST:

(leans back slightly)

And if this kind of breakdown is useful to you,

hit subscribe — because the tech is moving fast,

and it's worth knowing what's real.

---

**[FADE OUT]**
