export const Tabs = ({ tab, onTabSelected }) => {
  return (
    <a
      href={`#${tab.id}`}
      data-cy="TabLink"
      onClick={() => onTabSelected(tab.id)}
    >
      {tab.title}
    </a>
  );
};
