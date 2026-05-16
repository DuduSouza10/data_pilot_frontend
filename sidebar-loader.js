async function loadSidebar() {
  const sidebarContainer = document.getElementById("sidebar-container");

  if (!sidebarContainer) return;

  try {
    const response = await fetch("sidebar.html");

    if (!response.ok) {
      throw new Error("Não foi possível carregar sidebar.html");
    }

    const sidebarHTML = await response.text();
    sidebarContainer.innerHTML = sidebarHTML;

    const currentPage = document.body.dataset.page;
    const activeLink = sidebarContainer.querySelector(`[data-page="${currentPage}"]`);

    if (activeLink) {
      activeLink.classList.add("active");
    }
  } catch (error) {
    console.error(error);
    sidebarContainer.innerHTML = `
      <aside class="sidebar">
        <div>
          <div class="logo">
            <div class="logo-icon">F</div>
            <span>Facilita Financeiro</span>
          </div>
        </div>
        <div class="sidebar-footer">
          Erro ao carregar menu.<br />
          <strong>Use o Live Server</strong>
        </div>
      </aside>
    `;
  }
}

loadSidebar();
