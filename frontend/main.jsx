import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { AnimatePresence, MotionConfig, motion } from 'framer-motion';
import './styles.css';

const recommendations = [
  {
    number: '01',
    id: 'planning-trap',
    title: 'The Planning Trap',
    symptom: 'Plans list initiatives, but the leadership team cannot say where it will play or how it will win.',
    solution: 'Strategic Choice Cascade Sprint',
    workshopId: 'offer-choice-cascade',
    output: 'An integrated one-page choice cascade with its critical assumptions.',
  },
  {
    number: '02',
    id: 'knowledge-stock-collapse',
    title: 'Knowledge Stock Collapse',
    symptom: 'Useful expertise is stored across repositories, but it does not reliably reach changing work.',
    solution: 'Scalable Learning & Knowledge Flows Lab',
    workshopId: 'offer-knowledge-flows',
    output: 'A practical map of the knowledge, relationships and learning conditions the work depends on.',
  },
  {
    number: '03',
    id: 'tacit-knowledge-silos',
    title: 'Tacit Knowledge Silos',
    symptom: 'A few practitioners carry know-how that colleagues cannot learn from a document alone.',
    solution: 'Scalable Learning & Knowledge Flows Lab',
    workshopId: 'offer-knowledge-flows',
    output: 'A blueprint for moving expertise through shared practice, feedback and creation spaces.',
  },
  {
    number: '04',
    id: 'analytical-paralysis',
    title: 'Analytical Paralysis',
    symptom: 'The analysis expands while the choice, its assumptions and the next useful test stay unclear.',
    solution: 'Blended Epistemology Studio',
    workshopId: 'offer-blended-studio',
    output: 'Alternative hypotheses, scenario prototypes and questions that could change the decision.',
  },
  {
    number: '05',
    id: 'innovation-disconnect',
    title: 'The Innovation Disconnect',
    symptom: 'Experiments produce activity, but do not inform a strategic choice or build a needed capability.',
    solution: 'Blended Epistemology Studio',
    workshopId: 'offer-blended-studio',
    output: 'A bounded experiment linked to an explicit strategic hypothesis.',
  },
  {
    number: '06',
    id: 'executive-alignment',
    title: 'Executive Alignment',
    symptom: 'Leaders share an ambition but hold different assumptions about the arena, trade-offs or capabilities.',
    solution: 'Executive Offsites & Custom Masterclasses',
    workshopId: 'offer-executive-offsites',
    output: 'A shared record of choices, open assumptions and who will take the next step.',
  },
];

const sessions = [
  {
    id: 'arrival',
    start: '08:45',
    end: '09:00',
    minutes: 15,
    tag: 'K',
    category: 'knowledge',
    title: 'Arrival & strategic question',
    format: 'Room arrival, context and framing',
    group: 'Full group; cabaret tables of six proposed',
    artifact: 'A shared decision question and working boundaries.',
  },
  {
    id: 'cascade',
    start: '09:00',
    end: '09:30',
    minutes: 30,
    tag: 'K',
    category: 'knowledge',
    title: 'The choice cascade',
    format: 'Short framing session with questions',
    group: 'Full group',
    artifact: 'A first view of aspiration, arena, advantage, capabilities and systems.',
  },
  {
    id: 'where-to-play',
    start: '09:30',
    end: '10:15',
    minutes: 45,
    tag: 'S',
    category: 'skill',
    title: 'Where to play, and where not to play',
    format: 'Try-it-now mapping and post-up',
    group: 'Triplets',
    artifact: 'A boundary map across priority customers, needs, channels or geographies.',
  },
  {
    id: 'coffee',
    start: '10:15',
    end: '10:30',
    minutes: 15,
    tag: 'BR',
    category: 'break',
    title: 'Coffee break',
    format: 'Protected pause and room reset',
    group: 'Unstructured break',
    artifact: 'No session output.',
  },
  {
    id: 'hypotheses',
    start: '10:30',
    end: '11:15',
    minutes: 45,
    tag: 'W',
    category: 'scenario',
    title: 'What would have to be true?',
    format: 'Scenario challenge and hypothesis test',
    group: 'Pairs',
    artifact: 'A set of assumptions, evidence needs and possible disconfirming tests.',
  },
  {
    id: 'judging-hat',
    start: '11:15',
    end: '12:00',
    minutes: 45,
    tag: 'S/W',
    category: 'scenario',
    title: 'The Judging Hat',
    format: 'Role-reversal stress-test',
    group: 'Tables exchange strategies; review in small groups',
    artifact: 'A stress-tested cascade with exposed gaps and questions.',
  },
  {
    id: 'lunch',
    start: '12:00',
    end: '13:00',
    minutes: 60,
    tag: 'BR',
    category: 'break',
    title: 'Lunch break',
    format: 'Protected lunch pause',
    group: 'Unstructured break',
    artifact: 'No session output.',
  },
  {
    id: 'stocks-flows',
    start: '13:00',
    end: '13:45',
    minutes: 45,
    tag: 'K',
    category: 'knowledge',
    title: 'Knowledge stocks & flows',
    format: 'Visual framing and group reflection',
    group: 'Full group',
    artifact: 'A first sketch of what is codified and what moves through practice.',
  },
  {
    id: 'creation-space',
    start: '13:45',
    end: '14:45',
    minutes: 60,
    tag: 'S',
    category: 'skill',
    title: 'Designing a creation space',
    format: 'Studio tinkering and visual mapping',
    group: 'Small groups',
    artifact: 'A prototype of the relationships, work and conditions that enable learning.',
  },
  {
    id: 'afternoon-break',
    start: '14:45',
    end: '15:00',
    minutes: 15,
    tag: 'BR',
    category: 'break',
    title: 'Afternoon break',
    format: 'Protected pause',
    group: 'Unstructured break',
    artifact: 'No session output.',
  },
  {
    id: 'synthesis',
    start: '15:00',
    end: '16:00',
    minutes: 60,
    tag: 'W',
    category: 'scenario',
    title: 'Executive choice synthesis',
    format: 'Facilitated debate and stand-and-share',
    group: 'Full group',
    artifact: 'A revised one-page cascade, open tests and named next-step owners.',
  },
];

const filters = [
  { id: 'all', label: 'Show all' },
  { id: 'knowledge', label: 'Knowledge' },
  { id: 'skill', label: 'Skill drills' },
  { id: 'scenario', label: 'Scenario challenges' },
  { id: 'break', label: 'Sacred breaks' },
];

function NeedMatrix() {
  const [activeId, setActiveId] = useState(null);
  const activeNeed = recommendations.find((need) => need.id === activeId);

  function openRecommendation(need) {
    setActiveId((currentId) => currentId === need.id ? null : need.id);
  }

  function goToWorkshop() {
    if (!activeNeed) return;
    document.getElementById(activeNeed.workshopId)?.scrollIntoView({ block: 'start' });
  }

  return (
    <MotionConfig reducedMotion="user">
      <ul className="sa-needs-grid" aria-label="Organisational challenges">
        {recommendations.map((need) => (
          <motion.li
            key={need.id}
            className="sa-need-cell"
          >
            <motion.button
              type="button"
              className={`sa-need ${activeId === need.id ? 'is-active' : ''}`}
              aria-expanded={activeId === need.id}
              aria-controls={activeId === need.id ? 'need-recommendation' : undefined}
              onClick={() => openRecommendation(need)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.995 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <span className="sa-need-top"><span>{need.number}</span><span aria-hidden="true">↗</span></span>
              <span className="sa-need-title">{need.title}</span>
              <span className="sa-need-symptom">{need.symptom}</span>
            </motion.button>
          </motion.li>
        ))}
      </ul>

      <AnimatePresence initial={false}>
        {activeNeed && (
          <motion.aside
            id="need-recommendation"
            className="sa-recommendation"
            aria-live="polite"
            initial={{ opacity: 0, height: 0, y: -8 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -8 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="sa-recommendation-copy">
              <span className="sa-recommended-label"><span aria-hidden="true">●</span> Recommended solution</span>
              <h3>{activeNeed.solution}</h3>
              <p>{activeNeed.output}</p>
            </div>
            <button type="button" className="sa-text-button" onClick={goToWorkshop}>
              View workshop <span aria-hidden="true">↗</span>
            </button>
          </motion.aside>
        )}
      </AnimatePresence>
    </MotionConfig>
  );
}

function MasterclassTimeline() {
  const [activeId, setActiveId] = useState(sessions[0].id);
  const [activeFilter, setActiveFilter] = useState('all');
  const activeSession = sessions.find((session) => session.id === activeId) ?? sessions[0];

  function selectFilter(filterId) {
    setActiveFilter(filterId);
    if (filterId !== 'all' && activeSession.category !== filterId) {
      const firstMatch = sessions.find((session) => session.category === filterId);
      if (firstMatch) setActiveId(firstMatch.id);
    }
  }

  return (
    <MotionConfig reducedMotion="user">
      <div className="sa-timeline-controls">
        <div className="sa-filter-list" role="group" aria-label="Filter schedule by learning mode">
          {filters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              className={`sa-filter ${activeFilter === filter.id ? 'is-active' : ''}`}
              aria-pressed={activeFilter === filter.id}
              onClick={() => selectFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>
        <p className="sa-timeline-range">08:45 <span aria-hidden="true">—</span> 16:00</p>
      </div>

      <div className="sa-timebar" role="group" aria-label="Select a masterclass session">
        {sessions.map((session) => {
          const dimmed = activeFilter !== 'all' && session.category !== activeFilter;
          return (
            <button
              key={session.id}
              type="button"
              className={`sa-time-segment category-${session.category} ${activeId === session.id ? 'is-active' : ''} ${dimmed ? 'is-dimmed' : ''}`}
              style={{ flexGrow: session.minutes }}
              aria-label={`${session.start} to ${session.end}: ${session.title}`}
              aria-pressed={activeId === session.id}
              aria-disabled={dimmed}
              title={`${session.start}–${session.end} · ${session.title}`}
              onClick={() => !dimmed && setActiveId(session.id)}
            >
              <span>{session.tag}</span>
            </button>
          );
        })}
      </div>

      <div className="sa-timebar-legend" aria-hidden="true">
        <span><i className="legend-k">K</i> Knowledge</span>
        <span><i className="legend-s">S</i> Skill</span>
        <span><i className="legend-w">W</i> Wisdom</span>
        <span><i className="legend-break">BR</i> Break</span>
      </div>

      <div className="sa-timeline-stage">
        <AnimatePresence mode="wait" initial={false}>
          <motion.article
            key={activeSession.id}
            className={`sa-session-card category-${activeSession.category}`}
            aria-live="polite"
            initial={{ opacity: 0, scale: 0.985 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.985 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="sa-session-heading">
              <div>
                <p className="sa-session-time">{activeSession.start} <span aria-hidden="true">—</span> {activeSession.end}</p>
                <h3>{activeSession.title}</h3>
              </div>
              <span className={`sa-session-tag category-${activeSession.category}`}>{activeSession.tag}</span>
            </div>
            <dl className="sa-session-details">
              <div><dt>Format</dt><dd>{activeSession.format}</dd></div>
              <div><dt>Group</dt><dd>{activeSession.group}</dd></div>
              <div><dt>Working artifact</dt><dd>{activeSession.artifact}</dd></div>
            </dl>
          </motion.article>
        </AnimatePresence>
      </div>
    </MotionConfig>
  );
}

function enhanceNavigation() {
  const navigation = document.querySelector('.site-nav');
  if (!navigation) return;
  let previousScroll = window.scrollY;
  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    navigation.classList.toggle('is-scrolling-down', currentScroll > previousScroll && currentScroll > 12);
    previousScroll = currentScroll;
  }, { passive: true });
}

const needsRoot = document.getElementById('needs-matrix-app');
const timelineRoot = document.getElementById('masterclass-timeline-app');

if (needsRoot) createRoot(needsRoot).render(<NeedMatrix />);
if (timelineRoot) createRoot(timelineRoot).render(<MasterclassTimeline />);
enhanceNavigation();